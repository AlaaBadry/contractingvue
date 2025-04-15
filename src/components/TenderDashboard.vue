<template>
  <div class="d-flex vh-100" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <!-- Sidebar with gradient background -->
    <div class="w-12 bg-gradient-sidebar text-white shadow-lg">
      <div class="p-4">
        <h1 class="h2 fw-bold d-flex align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-primary">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="d-none d-md-inline">Archtopia Tenders</span>
        </h1>
      </div>
      
      <nav class="mt-4">
        <div class="px-3 mb-3">
          <h2 class="text-uppercase small text-white-50 d-none d-md-block">Main Menu</h2>
        </div>
        
        <ul class="nav flex-column px-3 gap-1">
          <li class="nav-item">
            <a href="#" class="nav-link d-flex align-items-center gap-3 px-3 py-2 rounded transition-all bg-gradient-primary text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span class="d-none d-md-inline">Tenders</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link d-flex align-items-center gap-3 px-3 py-2 rounded transition-all text-white-75 hover-bg hover-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
              <span class="d-none d-md-inline">Contracts</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link d-flex align-items-center gap-3 px-3 py-2 rounded transition-all text-white-75 hover-bg hover-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
              </svg>
              <span class="d-none d-md-inline">Invoices</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link d-flex align-items-center gap-3 px-3 py-2 rounded transition-all text-white-75 hover-bg hover-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span class="d-none d-md-inline">Reports</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-grow-1 overflow-auto bg-pattern">
      <div class="p-4">
        <!-- Header with Search and New Tender Button -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 class="h3 fw-bold text-dark mb-0">Tenders</h2>
            <p class="text-muted small mb-0">Manage all tender documents and processes</p>
          </div>
          <div class="d-flex gap-3">
            <div class="position-relative" style="width: 300px;">
              <input type="text" v-model="searchQuery" class="form-control ps-5 border-0 shadow-sm" placeholder="Search tenders...">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-muted position-absolute top-50 start-0 translate-middle-y ms-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button @click="toggleNewTenderForm" class="btn btn-primary shadow-sm d-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              {{ showNewTenderForm ? 'Cancel' : 'New Tender' }}
            </button>
          </div>
        </div>

        <!-- New Tender Collapsible Form -->
        <div v-if="showNewTenderForm" class="card border-0 shadow-lg mb-4 collapse-transition">
          <div class="card-body p-4">
            <div class="d-flex align-items-center mb-4">
              <h5 class="fw-bold mb-0">Create New Tender</h5>
              <span class="badge bg-soft-primary text-primary ms-2">Draft</span>
            </div>
            <form @submit.prevent="submitNewTender">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="tenderNumber" class="form-label">Tender Number <span class="text-danger">*</span></label>
                  <input type="text" class="form-control border-primary border-2" id="tenderNumber" v-model="newTender.tender_number" required>
                </div>
                <div class="col-md-6">
                  <label for="customer" class="form-label">Customer <span class="text-danger">*</span></label>
                  <select class="form-select border-primary border-2" id="customer" v-model="newTender.customer" required>
                    <option value="" disabled selected>Select Customer</option>
                    <option v-for="customer in customers" :key="customer.name" :value="customer.name">
                      {{ customer.customer_name }}
                    </option>
                  </select>
                  <div v-if="isFetchingOptions" class="text-muted small mt-1">
                    <span class="spinner-border spinner-border-sm me-1"></span>
                    Loading customers...
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="tenderDate" class="form-label">Tender Date <span class="text-danger">*</span></label>
                  <input type="date" class="form-control border-primary border-2" id="tenderDate" v-model="newTender.tender_date" required>
                </div>
                <div class="col-md-6">
                  <label for="project" class="form-label">Project</label>
                  <select class="form-select border-primary border-2" id="project" v-model="newTender.project">
                    <option value="" disabled selected>Select Project (Optional)</option>
                    <option v-for="project in projects" :key="project.name" :value="project.name">
                      {{ project.project_name }}
                    </option>
                  </select>
                  <div v-if="isFetchingOptions" class="text-muted small mt-1">
                    <span class="spinner-border spinner-border-sm me-1"></span>
                    Loading projects...
                  </div>
                </div>
                <div class="col-12">
                  <label for="description" class="form-label">Description</label>
                  <textarea class="form-control border-primary border-2" id="description" v-model="newTender.description" rows="3"></textarea>
                </div>
              </div>

              <!-- Contracting Items Section in New Tender Form -->
              <div class="mt-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="fw-bold mb-0">Contracting Items</h6>
                  <button type="button" @click="addContractingItemRow" class="btn btn-sm btn-outline-primary">
                    <i class="fas fa-plus me-2"></i> Add Item
                  </button>
                </div>
                <div class="table-responsive mb-3">
                  <table class="table table-bordered table-hover">
                    <thead class="table-primary">
                      <tr>
                        <th width="5%" class="text-center">No.</th>
                        <th width="10%" class="text-center">Is group</th>
                        <th width="15%">Contract Group</th>
                        <th width="15%">Series</th>
                        <th width="20%">Contracting Item</th>
                        <th width="10%">UOM</th>
                        <th width="10%" class="text-end">QTY</th>
                        <th width="10%" class="text-center">Cost Setup</th>
                        <th width="10%" class="text-end">Total Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in newTender.contracting_items" :key="index" class="align-middle">
                        <td class="text-center">{{ index + 1 }}</td>
                        <td class="text-center">
                          <input 
                            type="checkbox" 
                            :checked="item.is_group" 
                            @change="toggleGroup(index)" 
                            class="form-check-input"
                          >
                        </td>
                        <td>
                          <select v-model="item.contracting_item_group" class="form-select form-select-sm border-primary" v-if="contractGroups.length">
                            <option value="">Select Group</option>
                            <option v-for="group in contractGroups" :key="group" :value="group">
                              {{ group }}
                            </option>
                          </select>
                          <input v-else type="text" class="form-control form-control-sm border-primary" v-model="item.contracting_item_group">
                        </td>
                        <td>{{ item.series }}</td>
                        <td><input type="text" class="form-control form-control-sm border-primary" v-model="item.contracting_item"></td>
                        <td><input type="text" class="form-control form-control-sm border-primary" v-model="item.uom"></td>
                        <td><input type="number" class="form-control form-control-sm border-primary text-end" v-model="item.qty" min="0" @change="updateTotalCost(item)"></td>
                        <td class="text-center">
                          <button type="button" class="btn btn-sm btn-outline-primary" @click="toggleCostDetails(index)">
                            <i class="fas fa-calculator"></i>
                          </button>
                        </td>
                        <td class="text-end fw-bold">{{ formatCurrency(item.total_cost) }}</td>
                      </tr>
                      <tr v-if="newTender.contracting_items.length === 0">
                        <td colspan="9" class="text-center text-muted py-3">
                          <i class="fas fa-info-circle me-2"></i>No items added
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Cost Details Collapse for each item -->
                <div v-for="(item, index) in newTender.contracting_items" :key="'cost-'+index">
                  <div class="collapse" :class="{show: item.showCostDetails}" :id="'costDetails'+index">
                    <div class="card card-body mb-3 border-primary">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="fw-bold mb-0">Cost Details for Item {{ index + 1 }}</h6>
                        <button type="button" class="btn btn-sm btn-outline-secondary" @click="toggleCostDetails(index)">
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                      <div class="row g-3">
                        <div class="col-md-4">
                          <label :for="'contracting_item_group_'+index" class="form-label">Contracting Item Group</label>
                          <input type="text" class="form-control border-primary" :id="'contracting_item_group_'+index" v-model="item.contracting_item_group">
                        </div>
                        <div class="col-md-4">
                          <label :for="'tender_'+index" class="form-label">Tender</label>
                          <input type="text" class="form-control border-primary" :id="'tender_'+index" v-model="item.tender">
                        </div>
                        <div class="col-md-4">
                          <label :for="'project_'+index" class="form-label">Project</label>
                          <input type="text" class="form-control border-primary" :id="'project_'+index" v-model="item.project">
                        </div>
                        <div class="col-md-4">
                          <label :for="'material_costs_'+index" class="form-label">Material Costs</label>
                          <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="number" class="form-control border-primary" :id="'material_costs_'+index" v-model="item.material_costs" min="0" @input="calculateItemTotalCost(item)">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label :for="'labor_costs_'+index" class="form-label">Labor Costs</label>
                          <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="number" class="form-control border-primary" :id="'labor_costs_'+index" v-model="item.labor_costs" min="0" @input="calculateItemTotalCost(item)">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label :for="'expenses_table_'+index" class="form-label">Expenses</label>
                          <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="number" class="form-control border-primary" :id="'expenses_table_'+index" v-model="item.expenses_table" min="0" @input="calculateItemTotalCost(item)">
                          </div>
                        </div>
                        <div class="col-md-12">
                          <label :for="'total_cost_'+index" class="form-label">Total Cost</label>
                          <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="number" class="form-control border-primary fw-bold" :id="'total_cost_'+index" v-model="item.total_cost" readonly>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center mt-2">
                  <div class="text-muted small">
                    <i class="fas fa-info-circle me-1"></i> Add all items for this tender
                  </div>
                  <button type="button" @click="addContractingItemRow" class="btn btn-sm btn-outline-primary">
                    <i class="fas fa-plus me-1"></i> Add Another Item
                  </button>
                </div>
              </div>

              <div class="mt-4 d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-outline-secondary px-4" @click="toggleNewTenderForm">
                  <i class="fas fa-times me-1"></i> Cancel
                </button>
                <button type="submit" class="btn btn-primary px-4" :disabled="isSubmitting || isFetchingOptions">
                  <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-1"></span>
                  <i v-else class="fas fa-save me-1"></i>
                  {{ isSubmitting ? 'Creating...' : 'Create Tender' }}
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Tenders Table -->
        <div class="card border-0 shadow-lg">
          <div class="card-body p-4">
            <div v-if="isLoading" class="text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="mt-2 text-primary">Loading tenders...</p>
            </div>

            <div v-else-if="error" class="alert alert-danger d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="me-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h5 class="alert-heading">Error Loading Data</h5>
                <p class="mb-0">{{ error }}</p>
              </div>
            </div>

            <div v-else class="table-responsive rounded-3 overflow-hidden">
              <table class="table table-hover mb-0">
                <thead class="bg-gradient-table-header text-white text-uppercase small">
                  <tr>
                    <th class="ps-4">Tender ID</th>
                    <th>Tender Number</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th class="pe-4 text-end">Actions</th>
                  </tr>
                </thead>
                <tbody class="text-dark">
                  <template v-for="tender in filteredTenders" :key="tender.name">
                    <tr class="border-bottom main-row">
                      <td class="ps-4 py-3 fw-medium text-primary">{{ tender.name }}</td>
                      <td class="py-3">{{ tender.tender_number }}</td>
                      <td class="py-3">{{ getCustomerName(tender.customer) }}</td>
                      <td class="py-3">{{ formatDate(tender.tender_date) }}</td>
                      <td class="py-3">{{ tender.description }}</td>
                      <td class="py-3">
                        <span class="badge rounded-pill py-1 px-3" :class="{
                          'bg-soft-primary text-primary': tender.status === 'Draft',
                          'bg-soft-warning text-warning': tender.status === 'Submitted',
                          'bg-soft-success text-success': tender.status === 'Awarded',
                          'bg-soft-danger text-danger': tender.status === 'Cancelled'
                        }">
                          {{ tender.status }}
                        </span>
                      </td>
                      <td class="pe-4 py-3 text-end">
                        <button class="btn btn-sm btn-outline-primary" @click="toggleTenderDetails(tender.name)">
                          <i class="fas fa-list me-1"></i>
                          {{ expandedTenders.includes(tender.name) ? 'Hide' : 'Items' }}
                        </button>
                      </td>
                    </tr>
                    
                    <tr v-if="expandedTenders.includes(tender.name)" class="collapse-row details-panel">
                      <td colspan="7" class="p-4">
                        <div class="card border-0 shadow-sm">
                          <div class="card-body p-4">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <h5 class="fw-bold mb-0">Contracting Items</h5>
                              <span class="badge bg-soft-primary text-primary">
                                {{ tender.contracting_items.length }} Items
                              </span>
                            </div>
                            
                            <div class="table-responsive mb-4">
                              <table class="table table-bordered table-hover">
                                <thead class="table-light">
                                  <tr>
                                    <th width="5%" class="text-center">No.</th>
                                    <th width="10%" class="text-center">Is group</th>
                                    <th width="15%">Contract Group</th>
                                    <th width="15%">Series</th>
                                    <th width="20%">Contracting Item</th>
                                    <th width="10%">UOM</th>
                                    <th width="10%" class="text-end">QTY</th>
                                    <th width="10%" class="text-center">Cost Setup</th>
                                    <th width="10%" class="text-end">Total Cost</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <template v-for="(item, index) in tender.contracting_items" :key="index">
                                    <tr v-if="item.is_group" class="table-group">
                                      <td class="text-center">{{ index + 1 }}</td>
                                      <td colspan="8" class="fw-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="me-2">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                        {{ item.contracting_item_group || 'Group' }}
                                      </td>
                                    </tr>
                                    <tr v-else class="align-middle">
                                      <td class="text-center">{{ index + 1 }}</td>
                                      <td class="text-center">
                                        <input type="checkbox" v-model="item.is_group" disabled class="form-check-input">
                                      </td>
                                      <td>{{ item.contracting_item_group }}</td>
                                      <td>{{ item.series }}</td>
                                      <td>{{ item.contracting_item }}</td>
                                      <td>{{ item.uom }}</td>
                                      <td class="text-end">{{ item.qty }}</td>
                                      <td class="text-center">{{ item.cost_setup }}</td>
                                      <td class="text-end fw-bold">{{ formatCurrency(item.total_cost) }}</td>
                                    </tr>
                                  </template>
                                  <tr v-if="tender.contracting_items.length === 0">
                                    <td colspan="9" class="text-center text-muted py-3">
                                      <i class="fas fa-info-circle me-2"></i>No contracting items available
                                    </td>
                                  </tr>
                                </tbody>
                                <tfoot v-if="tender.contracting_items.length > 0">
                                  <tr class="table-active">
                                    <td colspan="7" class="text-end fw-bold">Total:</td>
                                    <td colspan="2" class="fw-bold text-end">
                                      {{ formatCurrency(calculateTotal(tender.contracting_items)) }}
                                    </td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </template>
                  <tr v-if="filteredTenders.length === 0 && !isLoading">
                    <td colspan="7" class="text-center py-5">
                      <div class="d-flex flex-column align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-muted mb-2">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <h5 class="text-muted">No tenders found</h5>
                        <p class="text-muted small">Create a new tender to get started</p>
                        <button @click="toggleNewTenderForm" class="btn btn-primary mt-2">
                          <i class="fas fa-plus me-1"></i> New Tender
                        </button>
                      </div>
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
  name: 'TenderDashboard',
  setup() {
    // State
    const tenders = ref([]);
    const customers = ref([]);
    const projects = ref([]);
    const contractGroups = ref([]);
    const searchQuery = ref('');
    const isLoading = ref(false);
    const isFetchingOptions = ref(false);
    const error = ref(null);
    const expandedTenders = ref([]);
    const showNewTenderForm = ref(false);
    const isSubmitting = ref(false);
    const newTender = ref({
      tender_number: '',
      customer: '',
      tender_date: new Date().toISOString().split('T')[0],
      description: '',
      project: '',
      status: 'Draft',
      contracting_items: []
    });

    // API Configuration
    const apiConfig = {
      baseUrl: "/api/resource",
      authToken: "dc4ebae4340d278:c673945bddf6f57"
    };
    
    const api = axios.create({
      baseURL: apiConfig.baseUrl,
      headers: {
        'Authorization': `token ${apiConfig.authToken}`,
        'Content-Type': 'application/json'
      }
    });

    // Helper Functions
    const createNewItem = (series) => {
      return {
        is_group: false,
        series: series,
        contracting_item_group: contractGroups.value.length ? contractGroups.value[0] : '',
        contracting_item: '',
        uom: '',
        qty: 0,
        cost_setup: 0,
        total_cost: 0,
        material_costs: 0,
        labor_costs: 0,
        expenses_table: 0,
        showCostDetails: false
      };
    };

    const findLastGroup = (items) => {
      for (let i = items.length - 1; i >= 0; i--) {
        if (items[i].is_group) {
          return items[i];
        }
      }
      return null;
    };

    const findPreviousGroup = (items, currentIndex) => {
      for (let i = currentIndex - 1; i >= 0; i--) {
        if (items[i].is_group) {
          return items[i];
        }
      }
      return null;
    };

    const countItemsInGroup = (items, currentIndex, groupNumber) => {
      let count = 0;
      for (let i = 0; i < currentIndex; i++) {
        if (!items[i].is_group && items[i].series.startsWith(`${groupNumber}-`)) {
          count++;
        }
      }
      return count;
    };

    const findNextGroupNumber = (items) => {
      let maxNumber = 0;
      items.forEach(item => {
        if (item.is_group) {
          const num = parseInt(item.series);
          if (num > maxNumber) maxNumber = num;
        }
      });
      return maxNumber;
    };

    // Methods
    const fetchCustomers = async () => {
      isFetchingOptions.value = true;
      try {
        const { data } = await api.get('/Customer', {
          params: {
            fields: JSON.stringify(["name", "customer_name"]),
            limit: 0
          }
        });
        customers.value = data.data || [];
      } catch (err) {
        console.error("Error fetching customers:", err);
      } finally {
        isFetchingOptions.value = false;
      }
    };

    const fetchProjects = async () => {
      isFetchingOptions.value = true;
      try {
        const { data } = await api.get('/Project', {
          params: {
            fields: JSON.stringify(["name", "project_name"]),
            limit: 0
          }
        });
        projects.value = data.data || [];
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        isFetchingOptions.value = false;
      }
    };

    const fetchContractGroups = async () => {
      try {
        const { data } = await api.get('/Contract Group', {
          params: {
            fields: JSON.stringify(["name", "group_name"]),
            limit: 0
          }
        });
        contractGroups.value = data.data.map(g => g.group_name || g.name) || [];
      } catch (err) {
        console.error("Error fetching contract groups:", err);
        contractGroups.value = [];
      }
    };

    const getCustomerName = (customerId) => {
      const customer = customers.value.find(c => c.name === customerId);
      return customer ? customer.customer_name : customerId;
    };

    const getProjectName = (projectId) => {
      if (!projectId) return '';
      const project = projects.value.find(p => p.name === projectId);
      return project ? project.project_name : projectId;
    };

    const toggleTenderDetails = (tenderName) => {
      const index = expandedTenders.value.indexOf(tenderName);
      if (index > -1) {
        expandedTenders.value.splice(index, 1);
      } else {
        expandedTenders.value.push(tenderName);
      }
    };

    const toggleNewTenderForm = async () => {
      showNewTenderForm.value = !showNewTenderForm.value;
      if (showNewTenderForm.value) {
        await Promise.all([
          customers.value.length === 0 ? fetchCustomers() : Promise.resolve(),
          projects.value.length === 0 ? fetchProjects() : Promise.resolve(),
          contractGroups.value.length === 0 ? fetchContractGroups() : Promise.resolve()
        ]);
      } else {
        resetNewTenderForm();
      }
    };

    const formatDate = (dateString) => {
      if (!dateString) return 'N/A';
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };

    const formatCurrency = (value) => {
      if (!value) return '$0.00';
      return '$' + parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    const updateTotalCost = (item) => {
      item.total_cost = (item.qty * item.cost_setup).toFixed(2);
    };

    const calculateItemTotalCost = (item) => {
      const material = parseFloat(item.material_costs) || 0;
      const labor = parseFloat(item.labor_costs) || 0;
      const expenses = parseFloat(item.expenses_table) || 0;
      item.total_cost = (material + labor + expenses).toFixed(2);
      item.cost_setup = item.total_cost;
    };

    const toggleCostDetails = (index) => {
      const item = newTender.value.contracting_items[index];
      item.showCostDetails = !item.showCostDetails;
    };

    const addContractingItemRow = () => {
      const items = newTender.value.contracting_items;
      
      // If list is empty, start with number 1
      if (items.length === 0) {
        const newItem = createNewItem('1');
        items.push(newItem);
        return;
      }

      // Find the last group
      let lastGroup = findLastGroup(items);
      
      // If no groups exist, use default group 1
      if (!lastGroup) {
        lastGroup = { series: '1', is_group: true };
      }

      const lastGroupNumber = parseInt(lastGroup.series);
      
      // Count items in the last group
      const itemsInGroup = items.filter(item => 
        !item.is_group && item.series.startsWith(`${lastGroupNumber}-`)
      ).length;

      const newItem = createNewItem(`${lastGroupNumber}-${itemsInGroup + 1}`);
      items.push(newItem);
    };

    const toggleGroup = (index) => {
      const items = newTender.value.contracting_items;
      const item = items[index];
      
      if (item.is_group) {
        // Convert from group to normal item
        const prevGroup = findPreviousGroup(items, index);
        const groupNumber = prevGroup ? parseInt(prevGroup.series) : 1;
        const itemsInGroup = countItemsInGroup(items, index, groupNumber);
        item.series = `${groupNumber}-${itemsInGroup + 1}`
      } else {
        // Convert from normal item to group
        const nextGroupNumber = findNextGroupNumber(items) + 2;
        item.series = nextGroupNumber.toString();
      }

      item.is_group = !item.is_group;
      updateFollowingItemsSeries(index);
    };

    const updateFollowingItemsSeries = (changedIndex) => {
      const items = newTender.value.contracting_items;
      let currentGroup = null;
      
      // Find current group
      for (let i = changedIndex; i >= 0; i--) {
        if (items[i].is_group) {
          currentGroup = items[i];
          break;
        }
      }
      
      const groupNumber = currentGroup ? parseInt(currentGroup.series) : 1;
      let itemCounter = 0;
      
      // Update following items
      for (let i = changedIndex + 1; i < items.length; i++) {
        if (items[i].is_group) {
          break; // Stop at next group
        }
        itemCounter++;
        items[i].series = `${groupNumber}-${itemCounter}`;
      }
    };

    const calculateTotal = (items) => {
      return items.reduce((sum, item) => {
        return sum + (parseFloat(item.total_cost) || 0);
      }, 0).toFixed(2);
    };

    const resetNewTenderForm = () => {
      newTender.value = {
        tender_number: '',
        customer: '',
        tender_date: new Date().toISOString().split('T')[0],
        description: '',
        project: '',
        status: 'Draft',
        contracting_items: []
      };
    };

    const submitNewTender = async () => {
      isSubmitting.value = true;
      try {
        // Prepare items for submission
        const itemsToSubmit = newTender.value.contracting_items.map(item => ({
          is_group: item.is_group,
          series: item.series,
          contracting_item_group: item.contracting_item_group,
          contracting_item: item.contracting_item,
          uom: item.uom,
          qty: item.qty,
          cost_setup: item.cost_setup,
          total_cost: item.total_cost
        }));

        const response = await api.post('/Tender', {
          tender_number: newTender.value.tender_number,
          customer: newTender.value.customer,
          tender_date: newTender.value.tender_date,
          description: newTender.value.description,
          project: newTender.value.project,
          status: newTender.value.status,
          contracting_items: itemsToSubmit,
          doctype: 'Tender'
        });
        
        tenders.value.unshift(response.data.data);
        showNewTenderForm.value = false;
        resetNewTenderForm();
      } catch (err) {
        error.value = "Failed to create tender. Please try again.";
        console.error("Error creating tender:", err);
      } finally {
        isSubmitting.value = false;
      }
    };

    const fetchTenders = async () => {
      isLoading.value = true;
      error.value = null;
      try {
        const { data } = await api.get('/Tender', {
          params: {
            fields: JSON.stringify([
              "name",
              "tender_number",
              "tender_date",
              "description",
              "customer",
              "project",
              "contracting_items.is_group",
              "contracting_items.series",
              "contracting_items.contracting_item_group",
              "contracting_items.contracting_item",
              "contracting_items.uom",
              "contracting_items.qty",
              "contracting_items.cost_setup",
              "contracting_items.total_cost"
            ]),
            limit: 20,
            order_by: "tender_date desc"
          }
        });
        
        tenders.value = data.data.map(tender => ({
          ...tender,
          contracting_items: tender.contracting_items || []
        }));
      } catch (err) {
        error.value = "Failed to load tenders. Please try again.";
        console.error("Error fetching tenders:", err);
      } finally {
        isLoading.value = false;
      }
    };

    // Computed
    const filteredTenders = computed(() => {
      if (!searchQuery.value) return tenders.value;
      const query = searchQuery.value.toLowerCase();
      return tenders.value.filter(tender => (
        (tender.name && tender.name.toLowerCase().includes(query)) ||
        (tender.tender_number && tender.tender_number.toLowerCase().includes(query)) ||
        (tender.customer && getCustomerName(tender.customer).toLowerCase().includes(query)) ||
        (tender.tender_date && formatDate(tender.tender_date).toLowerCase().includes(query)) ||
        (tender.description && tender.description.toLowerCase().includes(query)) ||
        (tender.status && tender.status.toLowerCase().includes(query))
      ));
    });

    // Lifecycle
    onMounted(async () => {
      await Promise.all([fetchTenders(), fetchCustomers(), fetchProjects(), fetchContractGroups()]);
    });

    return {
      tenders,
      customers,
      projects,
      contractGroups,
      searchQuery,
      isLoading,
      isFetchingOptions,
      error,
      expandedTenders,
      filteredTenders,
      showNewTenderForm,
      newTender,
      isSubmitting,
      toggleTenderDetails,
      formatDate,
      formatCurrency,
      getCustomerName,
      getProjectName,
      toggleNewTenderForm,
      addContractingItemRow,
      toggleGroup,
      updateTotalCost,
      calculateTotal,
      submitNewTender,
      toggleCostDetails,
      calculateItemTotalCost
    };
  }
}
</script> 

<style>
/* تحسينات متغيرة الألوان */
:root {
  --primary-color: #3a86ff;
  --primary-dark: #2667cc;
  --primary-light: rgba(58, 134, 255, 0.1);
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --info-color: #17a2b8;
  --warning-color: #ffc107;
  --danger-color: #dc3545;
  --light-color: #f8f9fa;
  --dark-color: #343a40;
  --sidebar-bg: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  --table-header-bg: linear-gradient(135deg, #3a86ff 0%, #2667cc 100%);
  --transition-time: 0.3s;
  --border-radius: 0.75rem;
  --box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

/* تحسينات الجدول الرئيسي */
.table {
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: transparent;
}

.table thead th {
  position: sticky;
  top: 0;
  background: var(--table-header-bg);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  padding: 1rem 1.25rem;
  border: none;
  vertical-align: middle;
  white-space: nowrap;
}

.table tbody tr {
  background-color: white;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
}

.table tbody tr:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.table tbody td {
  padding: 1rem 1.25rem;
  vertical-align: middle;
  border-top: none;
  border-bottom: none;
  transition: all 0.2s ease;
  position: relative;
}

/* زوايا مدورة للصفوف */
.table tbody tr td:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.table tbody tr td:last-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

/* تحسينات النص داخل الخلايا */
.table td {
  font-size: 0.875rem;
  color: #4a5568;
}

.table td.text-primary {
  font-weight: 600;
}

/* تحسينات البادجات */
.table .badge {
  font-size: 0.7em;
  padding: 0.35em 0.65em;
  min-width: 70px;
  display: inline-block;
  text-align: center;
  border-radius: 50px;
}

/* تحسينات الأزرار داخل الجدول */
.table .btn {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
}

/* تنسيقات خاصة للصفوف المميزة */
.table tbody tr.main-row {
  cursor: pointer;
}

.table tbody tr.main-row:hover td {
  background-color: rgba(58, 134, 255, 0.03);
}

/* تنسيقات الصف التفصيلي */
.table tbody tr.details-panel {
  background-color: #f9fafc;
  box-shadow: none;
}

.table tbody tr.details-panel td {
  padding: 0;
}

.table tbody tr.details-panel .card {
  border: none;
  box-shadow: none;
  background-color: transparent;
}

/* تأثيرات خاصة للصفوف المميزة */
.table tbody tr.main-row td:first-child {
  position: relative;
  padding-left: 1.5rem;
}

.table tbody tr.main-row td:first-child::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: var(--primary-color);
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

/* تحسينات لعناصر SVG داخل الجدول */
.table svg {
  vertical-align: middle;
}

/* تحسينات الخطوط */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* تحسينات الشريط الجانبي */
.bg-gradient-sidebar {
  background: var(--sidebar-bg) !important;
  min-width: 250px;
  transition: all var(--transition-time) ease;
}

/* تحسينات الروابط في الشريط الجانبي */
.nav-link {
  border-radius: var(--border-radius);
  margin: 0.25rem 0;
  transition: all var(--transition-time) ease;
}

.nav-link:hover {
  transform: translateX(5px);
}

/* تحسينات البطاقات */
.card {
  border-radius: var(--border-radius);
  border: none;
  transition: all var(--transition-time) ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--box-shadow);
}

/* تحسينات حقول الإدخال */
.form-control, .form-select {
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem;
  transition: all var(--transition-time) ease;
}

.form-control:focus, .form-select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.25rem rgba(58, 134, 255, 0.25);
}

/* تحسينات البادجات */
.badge {
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 0.35em 0.65em;
}

/* تحسينات الحركات والانتقالات */
.transition-all {
  transition: all var(--transition-time) ease;
}

.collapse-transition {
  transition: all var(--transition-time) ease;
  overflow: hidden;
}

/* تحسينات التباين والألوان */
.text-primary {
  color: var(--primary-color) !important;
}

.bg-soft-primary {
  background-color: var(--primary-light) !important;
}

/* تحسينات جدول العناصر التعاقدية */
.contracting-items-table {
  border-radius: var(--border-radius);
  overflow: hidden;
}

.contracting-items-table th {
  background-color: var(--primary-color);
  color: white;
  font-weight: 500;
  padding: 0.75rem 1rem;
}

.contracting-items-table td {
  padding: 0.75rem 1rem;
  vertical-align: middle;
}

.contracting-items-table tr.group-row {
  background-color: rgba(58, 134, 255, 0.05);
  font-weight: 600;
}

/* تحسينات تفاصيل التكلفة */
.cost-details-card {
  border-left: 3px solid var(--primary-color);
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

/* تحسينات زر الإضافة */
.add-item-btn {
  transition: all var(--transition-time) ease;
}

.add-item-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* تحسينات حالة التحميل */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.loading-spinner {
  width: 3rem;
  height: 3rem;
  border-width: 0.25rem;
}

/* تحسينات الشكل العام */
.main-container {
  background-color: #f8fafc;
}

.content-area {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

/* تحسينات شريط البحث */
.search-box {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--secondary-color);
}

/* تحسينات الحالة الفارغة */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.empty-state-icon {
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

/* تحسينات التنقل بين العناصر */
.tab-content {
  padding: 1.5rem;
  background-color: white;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}

/* تحسينات للاستجابة على الشاشات الصغيرة */
@media (max-width: 768px) {
  .table thead {
    display: none;
  }
  
  .table tbody tr {
    display: block;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
  
  .table tbody td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  }
  
  .table tbody td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #4a5568;
    margin-right: 1rem;
    flex: 1;
  }
  
  .table tbody td > * {
    flex: 2;
    text-align: right;
  }
  
  .table tbody td:first-child,
  .table tbody td:last-child {
    border-radius: 0;
  }
  
  .table tbody td:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  
  .table tbody td:last-child {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom: none;
  }
  
  .table tbody tr.details-panel td {
    padding: 0;
  }
  
  .table tbody tr.details-panel .card {
    margin-top: 0.5rem;
  }

  /* تحسينات الشريط الجانبي للجوال */
  .w-12 {
    width: 80px !important;
  }
  
  .nav-link {
    justify-content: center;
    padding: 0.75rem;
  }
  
  .nav-link span {
    display: none;
  }
  
  .sidebar-brand span {
    display: none;
  }

  /* تحسينات التخطيط العام للجوال */
  .d-flex.justify-content-between {
    flex-direction: column;
    gap: 1rem;
  }
  
  .search-box {
    width: 100% !important;
  }
}
</style>