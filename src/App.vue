<template>
    <div id="app">
      <header class="app-header">
        <h1>نظام إدارة المناقصات</h1>
      </header>
      <main class="app-main">
        <TenderDashboard />
      </main>
    </div>
  </template>
  
  <script>
  import TenderDashboard from './components/TenderDashboard.vue'
  
  export default {
    name: 'App',
    components: {
      TenderDashboard
    }
  }
  </script>
  
  <!-- <style>
  أنماط أساسية خفيفة
  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .app-header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }
  
  .app-main {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 768px) {
    #app {
      padding: 10px;
    }
  }
  </style>  -->