<script setup lang="ts">
const { data: resume } = await useAsyncData('resume', () =>
  queryCollection('resume').first()
)

if (!resume.value) {
  throw createError({ statusCode: 404, statusMessage: 'Resume data not found', fatal: true })
}

// Default locale — swap to 'en' or add a switcher as needed
const lang = ref<'es' | 'en'>('es')
const t = computed(() => resume.value!.translations[lang.value])

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}
</script>

<template>
  <TerminalAppShell>

    <!-- ─── PROFILE ─────────────────────────────────────────── -->
    <TerminalFrame id="profile" title="PROFILE VIEW">
      <div class="profile-details">
        <div class="row"><strong>DISCIPLINE:</strong> {{ resume!.discipline }}</div>
        <div class="row"><strong>CAPACITY:</strong> {{ resume!.capacity }}</div>
        <div class="row"><strong>EXPERIENCE:</strong> {{ resume!.totalYearsExperience }} YEARS</div>
      </div>

      <br />
      <hr style="opacity: 0.1; margin: 1.5rem 0;" />

      <div class="bio-section">
        <div class="row" style="color: #cba6f7; font-weight: bold; margin-bottom: 0.5rem">BIO.TXT</div>
        <div class="row">{{ t.bio }}</div>
      </div>

      <br />

      <div class="row" style="color: #cba6f7; font-weight: bold; margin-bottom: 0.5rem">LANGUAGES</div>
      <div class="lang-grid">
        <LangBox
          v-for="l in t.languages"
          :key="l.langCode"
          :code="l.langCode.toUpperCase()"
          :level="l.level"
        />
      </div>
    </TerminalFrame>

    <!-- ─── EXPERIENCE ──────────────────────────────────────── -->
    <TerminalFrame id="experience" title="EXPERIENCE VIEW">
      <div
        v-for="exp in t.experiences.filter((e: any) => e.company)"
        :key="exp.itemId"
        class="exp-entry"
      >
        <div class="exp-header">
          <span class="company-name">{{ exp.company }}</span>
          <span class="role-name">:: {{ exp.role }}</span>
        </div>
        <div class="exp-date">
          [{{ formatDate(exp.start) }} - {{ exp.end ? formatDate(exp.end) : 'Present' }}]
          <span v-if="exp.sector"> | {{ exp.sector }}</span>
        </div>

        <div
          v-for="proj in exp.projects"
          :key="proj.itemId"
          class="project-entry"
        >
          <div class="project-title"># {{ proj.projectName }}</div>
          <p v-if="proj.description" class="project-desc">{{ proj.description }}</p>

          <!-- Collect all tech tags: languages + tools + libraries + platforms -->
          <div class="tag-list">
            <TerminalTag
              v-for="item in [
                ...proj.languages,
                ...proj.tools,
                ...proj.libraries,
                ...proj.platforms,
              ]"
              :key="item.itemId"
              :label="item.itemValue"
            />
          </div>
        </div>
      </div>
    </TerminalFrame>

    <!-- ─── SKILLS ──────────────────────────────────────────── -->
    <TerminalFrame id="skills" title="SKILLS VIEW">
      <div class="row" style="color: #cba6f7; font-weight: bold; margin-bottom: 0.5rem">MAIN_KNOWLEDGE.EXE</div>
      <div class="skill-list">
        <SkillBar
          v-for="skill in t.mainKnowledges"
          :key="skill.name"
          :name="skill.name"
          :years="skill.years"
          :percent="Math.round((skill.years / 10) * 100)"
        />
      </div>

      <br />
      <div class="row" style="color: #cba6f7; font-weight: bold; margin-bottom: 0.5rem">EXTRA_KNOWLEDGE.LOG</div>
      <div class="skill-list">
        <SkillBar
          v-for="skill in t.extraKnowledges"
          :key="skill.name"
          :name="skill.name"
          :years="skill.years"
          :percent="Math.round((skill.years / 10) * 100)"
        />
      </div>
    </TerminalFrame>

    <!-- ─── EDUCATION ───────────────────────────────────────── -->
    <TerminalFrame id="education" title="EDUCATION VIEW">
      <table class="edu-table">
        <thead>
          <tr>
            <th>Institution</th>
            <th>Degree</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="edu in t.educations" :key="edu.itemId">
            <td class="edu-institution">{{ edu.institution }}</td>
            <td class="edu-degree">{{ edu.titleName }}</td>
            <td class="edu-year">{{ edu.yearCompleted }}</td>
          </tr>
        </tbody>
      </table>

      <hr style="opacity: 0.1; margin: 2rem 0;" />

      <div class="row" style="color: #cba6f7; font-weight: bold; margin-bottom: 1rem">COURSES &amp; CERTIFICATIONS</div>
      <div class="course-list">
        <div
          v-for="course in t.courses"
          :key="course.itemId"
          class="course-item"
        >
          <span class="course-date">[{{ formatDate(course.dateCompleted) }}]</span>
          {{ course.name }}
          @ <span class="course-inst">{{ course.institution }}</span>
        </div>
      </div>
    </TerminalFrame>

  </TerminalAppShell>
</template>
