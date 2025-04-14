<template>
  <div class="d-flex vh-100" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <!-- Sidebar -->
    <div class="w-25 bg-dark text-white shadow">
      <div class="p-4">
        <h1 class="h2 fw-bold d-flex align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>ERPNext Sales</span>
        </h1>
      </div>
      
      <nav class="mt-4">
        <div class="px-3 mb-3">
          <h2 class="text-uppercase small text-muted">Main Menu</h2>
        </div>
        
        <ul class="nav flex-column px-3 gap-1">
          <li class="nav-item">
            <a href="#" class="nav-link d-flex align-items-center gap-3 px-3 py-2 rounded transition-all bg-primary text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Sales Invoices</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-grow-1 overflow-auto bg-light">
      <div class="p-4">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h2 class="h3 fw-bold text-dark mb-0">Sales Invoices</h2>
              <div class="position-relative" style="width: 300px;">
                <input type="text" v-model="searchQuery" class="form-control ps-5 border-0 shadow-sm" placeholder="Search invoices...">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-muted position-absolute top-50 start-0 translate-middle-y ms-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div v-if="isLoading" class="text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="mt-2">Loading invoices...</p>
            </div>

            <div v-else-if="error" class="alert alert-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="me-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {{ error }}
            </div>

            <div v-else class="table-responsive rounded-3 overflow-hidden">
              <table class="table table-hover mb-0">
                <thead class="table-dark text-white text-uppercase small">
                  <tr>
                    <th class="ps-4">Invoice #</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th class="pe-4 text-end">Actions</th>
                  </tr>
                </thead>
                <tbody class="text-dark">
                  <template v-for="invoice in filteredInvoices" :key="invoice.name">
                    <tr class="border-bottom main-row">
                      <td class="ps-4 py-3 fw-medium">{{ invoice.name }}</td>
                      <td class="py-3">{{ invoice.customer_name }}</td>
                      <td class="py-3">{{ formatDate(invoice.posting_date) }}</td>
                      <td class="py-3">{{ formatCurrency(invoice.grand_total) }}</td>
                      <td class="py-3">
                        <span class="badge rounded-pill small fw-medium" :class="getStatusBadgeClass(invoice.status)">
                          {{ invoice.status }}
                        </span>
                      </td>
                      <td class="pe-4 py-3 text-end">
                        <button class="btn btn-sm btn-outline-primary me-2" @click="toggleInvoiceDetails(invoice.name)">
                          {{ expandedInvoices.includes(invoice.name) ? 'Hide' : 'Details' }}
                        </button>
                        <button class="btn btn-sm btn-outline-secondary" @click="printInvoice(invoice.name)">
                          Print
                        </button>
                      </td>
                    </tr>
                    
                    <tr v-if="expandedInvoices.includes(invoice.name)" class="collapse-row details-panel">
                      <td colspan="6" class="p-4">
                        <div class="row">
                          <div class="col-md-6">
                            <h6 class="fw-bold">Invoice Details:</h6>
                            <ul class="list-unstyled">
                              <li><strong>Invoice #:</strong> {{ invoice.name }}</li>
                              <li><strong>Customer:</strong> {{ invoice.customer_name }}</li>
                              <li><strong>Date:</strong> {{ formatDate(invoice.posting_date) }}</li>
                              <li><strong>Status:</strong> {{ invoice.status }}</li>
                              <li><strong>Total Amount:</strong> {{ formatCurrency(invoice.grand_total) }}</li>
                            </ul>
                          </div>
                          <div class="col-md-6">
                            <h6 class="fw-bold">Items:</h6>
                            <table class="table table-sm">
                              <thead>
                                <tr>
                                  <th>Item</th>
                                  <th>Qty</th>
                                  <th>Rate</th>
                                  <th>Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in invoice.items" :key="item.name">
                                  <td>{{ item.item_name }}</td>
                                  <td>{{ item.qty }}</td>
                                  <td>{{ formatCurrency(item.rate) }}</td>
                                  <td>{{ formatCurrency(item.amount) }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </template>
                  <tr v-if="filteredInvoices.length === 0 && !isLoading">
                    <td colspan="6" class="text-center py-4 text-muted">
                      No invoices found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'SalesInvoiceDashboard',
  setup() {
    // State
    const invoices = ref([]);
    const searchQuery = ref('');
    const isLoading = ref(false);
    const error = ref(null);
    const expandedInvoices = ref([]);

    // API Configuration
    const apiConfig = {
      baseUrl: "http://192.168.1.59/api/resource",
      authToken: "dc4ebae4340d278:37a5bccb6aae2e1"
    };
    
    const api = axios.create({
      baseURL: apiConfig.baseUrl,
      headers: {
        'Authorization': `token ${apiConfig.authToken}`,
        'Content-Type': 'application/json'
      }
    });

    // Methods
    const toggleInvoiceDetails = (invoiceName) => {
      const index = expandedInvoices.value.indexOf(invoiceName);
      if (index > -1) {
        expandedInvoices.value.splice(index, 1);
      } else {
        expandedInvoices.value.push(invoiceName);
      }
    };

    // Fetch Sales Invoices
    const fetchInvoices = async () => {
      isLoading.value = true;
      error.value = null;
      try {
        const { data } = await api.get('/Tender', {
          params: {
            fields: JSON.stringify([
              "name"
            ]),
            limit: 20,
            order_by: "posting_date desc"
          }
        });
        invoices.value = data.data || [];
      } catch (err) {
        error.value = "Failed to load invoices. Please try again.";
        console.error("Error fetching invoices:", err);
      } finally {
        isLoading.value = false;
      }
    };

    // View Invoice
    const viewInvoice = (name) => {
      window.open(`/app/sales-invoice/${name}`, '_blank');
    };

    // Print Invoice
    const printInvoice = (name) => {
      window.open(`/app/print/sales-invoice/${name}`, '_blank');
    };

    // Format date
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };

    // Format currency
    const formatCurrency = (amount) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    };

    // Get status badge class
    const getStatusBadgeClass = (status) => {
      const statusColors = {
        'Draft': 'bg-secondary text-white',
        'Submitted': 'bg-info text-dark',
        'Paid': 'bg-success text-white',
        'Unpaid': 'bg-warning text-dark',
        'Overdue': 'bg-danger text-white',
        'Cancelled': 'bg-dark text-white'
      };
      return statusColors[status] || 'bg-light text-dark';
    };

    // Filtered invoices
    const filteredInvoices = computed(() => {
      if (!searchQuery.value) return invoices.value;
      const query = searchQuery.value.toLowerCase();
      return invoices.value.filter(invoice => (
        (invoice.name && invoice.name.toLowerCase().includes(query)) ||
        (invoice.customer_name && invoice.customer_name.toLowerCase().includes(query)) ||
        (invoice.posting_date && formatDate(invoice.posting_date).toLowerCase().includes(query)) ||
        (invoice.status && invoice.status.toLowerCase().includes(query))
      ));
    });

    // Fetch data on mount
    onMounted(fetchInvoices);

    return {
      invoices,
      searchQuery,
      isLoading,
      error,
      expandedInvoices,
      filteredInvoices,
      toggleInvoiceDetails,
      viewInvoice,
      printInvoice,
      formatDate,
      formatCurrency,
      getStatusBadgeClass
    };
  }
}
</script>

<style>
.bg-dark {
  background-color: #1a1a2e !important;
}

.bg-primary {
  background-color: #3a86ff !important;
}

.transition-all {
  transition: all 0.3s ease;
}

.table-hover tbody tr:hover {
  background-color: rgba(58, 134, 255, 0.05) !important;
}

.badge {
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 500;
}

.card {
  border-radius: 0.5rem;
}

/* Collapse row styles */
.collapse-row {
  transition: all 0.3s ease;
}

.details-panel {
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
}

.main-row:hover {
  background-color: rgba(58, 134, 255, 0.05);
  cursor: pointer;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .details-panel .row > div {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>