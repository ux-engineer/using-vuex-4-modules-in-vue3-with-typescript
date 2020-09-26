<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld msg="Using Vuex 4 (beta + Vue 3.0) Modules in TypeScript!" />

  <hr
    id="quite-neat-divider"
    color="white"
  >

  <h3>
    {{ isClient ? 'User is Client' : (isAdmin ? 'User is Admin' : 'No clue who the heck...') }}
  </h3>
  <button @click.prevent="fetchDocuments()">
    Fetch documents
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

import { useStore } from '@/store';
import { DocumentsActionTypes } from '@/store/modules/documents/action-types';

import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();

    async function fetchDocuments() {
      try {
        await store.dispatch(DocumentsActionTypes.FETCH_DOCUMENTS, '1');
      } catch (error) {
        console.error('fetchDocuments', error);
      }
    }

    return {
      fetchDocuments,
    };
  },
  computed: {
    ...mapGetters('profile', ['isClient', 'isAdmin']),
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 50px;
}

#quite-neat-divider {
  border-top: 3px dashed green;
  margin: 60px 60px 50px;
}
</style>
