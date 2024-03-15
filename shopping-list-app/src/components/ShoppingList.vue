<template>
  <div>
    <h1>Shopping List</h1>
    <ul>
      <li v-for="item in items" :key="item._id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import PouchDB from 'pouchdb-browser';

export default {
  name: 'ShoppingList',
  data() {
    return {
      db: null,
      items: [],
      remoteCouch: 'http://localhost:5984/shopping-list',
    };
  },
  async created() {
    this.db = new PouchDB('shopping_list');
    await this.fetchItems();
    this.db.replicate.to(this.remoteCouch, { live: true, retry: true });
    this.db.replicate.from(this.remoteCouch, { live: true, retry: true }).on('change', this.onDatabaseChange);
  },
  methods: {
    async fetchItems() {
      const result = await this.db.allDocs({ include_docs: true });
      this.items = result.rows.map(row => row.doc);
    },
    onDatabaseChange() {
      this.fetchItems();
    },
  },
};
</script>
