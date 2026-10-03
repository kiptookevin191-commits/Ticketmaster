var state = {
  title: 'BTS WORLD TOUR ARIRANG - BOGOTÁ',
  date: 'FRI • OCT 2, 2026 • 7:00 PM',
  venue: 'Estadio El Campín, Bogotá',
  cover: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600',
  tickets: [
    { id: 1, section: 'Occidental Baja', row: '12', seat: '5', selected: false, transferred: false },
    { id: 2, section: 'Occidental Baja', row: '12', seat: '6', selected: false, transferred: false },
    { id: 3, section: 'Occidental Baja', row: '12', seat: '7', selected: false, transferred: false }
  ],
  users: [
    { id: 1, name: 'Sofia Martinez', email: 'sofia.martinez@example.com', meta: 'Logged in 2 min ago · iPhone', blocked: false },
    { id: 2, name: 'James Carter', email: 'james.carter@example.com', meta: 'Logged in 15 min ago · Chrome', blocked: false },
    { id: 3, name: 'Aisha Khan', email: 'aisha.khan@example.com', meta: 'Logged in 1 hr ago · Android', blocked: false },
    { id: 4, name: 'Marco Rossi', email: 'marco.rossi@example.com', meta: 'Blocked by admin', blocked: true }
  ]
};

function go(screenName) {
  var screens = document.querySelectorAll('.screen');
  for (var i = 0; i < screens.length; i++) { screens[i].classList.remove('active'); }
  document.getElementById('screen-' + screenName).classList.add('active');
  if (screenName === 'admin') renderAdmin();
  if (screenName === 'events') renderEvents();
  if (screenName === 'details') renderDetails();
  if (screenName === 'select') renderSelect();
}

function renderEvents() {
  document.getElementById('ev-cover').src = state.cover;
  document.getElementById('ev-date-badge').textContent = state.date;
  document.getElementById('ev-title').textContent = state.title;
  document.getElementById('ev-venue').textContent = state.venue;
  var avail = state.tickets.filter(function(t){ return !t.transferred; });
  document.getElementById('ev-ticket-count').textContent = 'x' + avail.length;
}

function renderDetails() {
  document.getElementById('dt-cover').src = state.cover;
  document.getElementById('dt-date').textContent = state.date;
  document.getElementById('dt-title').textContent = state.title;
  document.getElementById('dt-venue').textContent = state.venue;
  var avail = state.tickets.filter(function(t){ return !t.transferred; });
  document.getElementById('dt-count').textContent = 'x' + avail.length;
  document.getElementById('dt-ticket-label').textContent = 'x' + avail.length + ' Tickets';
  var list = document.getElementById('ticket-list');
  list.innerHTML = '';
  state.tickets.forEach(function(t){
    var cls = t.transferred ? 'stub transferred' : 'stub';
    var html = '<div class="' + cls + '">'
      + '<div class="stub-head"><div>'
      + '<div class="stub-type">Standard Ticket</div>'
      + '<div class="stub-sub">' + (t.transferred ? 'Transferred' : 'Mobile Ticket') + '</div>'
      + '</div></div>'
      + '<div class="stub-grid">'
      + '<div><span class="stub-label">Section</span><span class="stub-val">' + t.section + '</span></div>'
      + '<div><span class="stub-label">Row</span><span class="stub-val">' + t.row + '</span></div>'
      + '<div><span class="stub-label">Seat</span><span class="stub-val">' + t.seat + '</span></div>'
      + '</div></div>';
    list.innerHTML += html;
  });
}

function startTransfer() {
  state.tickets.forEach(function(t){ t.selected = false; });
  go('select');
}

function renderSelect() {
  var list = document.getElementById('select-list');
  list.innerHTML = '';
  var available = state.tickets.filter(function(t){ return !t.transferred; });
  available.forEach(function(t){
    var cls = t.selected ? 'sel-ticket selected' : 'sel-ticket';
    var html = '<div class="' + cls + '" onclick="toggleSelect(' + t.id + ')">'
      + '<div class="sel-check"></div>'
      + '<div class="sel-ticket-body">'
      + '<div class="sel-ticket-type">Standard Ticket</div>'
      + '<div class="sel-ticket-sub">Mobile Ticket</div>'
      + '<div class="sel-ticket-grid">'
      + '<div><span class="sel-ticket-label">Section</span><span class="sel-ticket-val">' + t.section + '</span></div>'
      + '<div><span class="sel-ticket-label">Row</span><span class="sel-ticket-val">' + t.row + '</span></div>'
      + '<div><span class="sel-ticket-label">Seat</span><span class="sel-ticket-val">' + t.seat + '</span></div>'
      + '</div></div></div>';
    list.innerHTML += html;
  });
  updateContinueBtn();
}

function toggleSelect(id) {
  state.tickets.forEach(function(t){ if (t.id === id) t.selected = !t.selected; });
  renderSelect();
}

function updateContinueBtn() {
  var count = state.tickets.filter(function(t){ return t.selected && !t.transferred; }).length;
  var btn = document.getElementById('btn-continue');
  btn.disabled = count === 0;
  btn.textContent = count > 0 ? 'CONTINUE (' + count + ')' : 'CONTINUE';
  document.getElementById('rec-note').textContent = count + ' ticket' + (count === 1 ? '' : 's') + ' selected for transfer.';
}

function finishTransfer() {
  state.tickets.forEach(function(t){ if (t.selected && !t.transferred) { t.transferred = true; t.selected = false; } });
  document.getElementById('success-modal').classList.add('show');
}

function closeSuccess() {
  document.getElementById('success-modal').classList.remove('show');
  go('details');
}

function addTicket() {
  var nextId = state.tickets.length > 0 ? Math.max.apply(null, state.tickets.map(function(t){ return t.id; })) + 1 : 1;
  state.tickets.push({ id: nextId, section: 'Occidental Baja', row: '12', seat: String(nextId + 4), selected: false, transferred: false });
  renderAdmin();
}

function deleteTicket(id) {
  state.tickets = state.tickets.filter(function(t){ return t.id !== id; });
  renderAdmin();
}

function updateTicket(id, field, val) {
  state.tickets.forEach(function(t){ if (t.id === id) t[field] = val; });
}

function renderAdmin() {
  document.getElementById('admin-title').value = state.title;
  document.getElementById('admin-date').value = state.date;
  document.getElementById('admin-venue').value = state.venue;
  document.getElementById('admin-cover').value = state.cover;
  document.getElementById('admin-count').textContent = state.tickets.length;
  var list = document.getElementById('admin-ticket-list');
  list.innerHTML = '';
  state.tickets.forEach(function(t){
    var html = '<div class="ad-ticket">'
      + '<div class="ad-ticket-head">'
      + '<span class="ad-ticket-num">Ticket #' + t.id + '</span>'
      + '<button class="ad-delete-btn" onclick="deleteTicket(' + t.id + ')">Delete</button>'
      + '</div>'
      + '<div class="ad-ticket-grid">'
      + '<input value="' + t.section + '" onchange="updateTicket(' + t.id + ',\'section\',this.value)" placeholder="Section">'
      + '<input value="' + t.row + '" onchange="updateTicket(' + t.id + ',\'row\',this.value)" placeholder="Row">'
      + '<input value="' + t.seat + '" onchange="updateTicket(' + t.id + ',\'seat\',this.value)" placeholder="Seat">'
      + '</div></div>';
    list.innerHTML += html;
  });
  renderUsers();
}

function renderUsers() {
  var list = document.getElementById('user-list');
  list.innerHTML = '';
  state.users.forEach(function(u){
    var cls = u.blocked ? 'user-card blocked' : 'user-card';
    var statusCls = u.blocked ? 'user-status blocked-status' : 'user-status online';
    var statusText = u.blocked ? 'Blocked' : 'Online';
    var btn = u.blocked
      ? '<button class="user-btn restore" onclick="restoreUser(' + u.id + ')">Bring back in</button>'
      : '<button class="user-btn logout" onclick="blockUser(' + u.id + ')">Log out permanently</button>';
    var html = '<div class="' + cls + '">'
      + '<div class="user-info">'
      + '<div class="user-name">' + u.name + ' <span class="' + statusCls + '">' + statusText + '</span></div>'
      + '<div class="user-email">' + u.email + '</div>'
      + '<div class="user-meta">' + u.meta + '</div>'
      + '</div>'
      + '<div class="user-actions">' + btn + '</div>'
      + '</div>';
    list.innerHTML += html;
  });
}

function blockUser(id) {
  state.users.forEach(function(u){ if (u.id === id) { u.blocked = true; u.meta = 'Blocked by admin'; } });
  renderUsers();
}

function restoreUser(id) {
  state.users.forEach(function(u){ if (u.id === id) { u.blocked = false; u.meta = 'Logged in just now · restored'; } });
  renderUsers();
}

function doLogin() {
  var email = document.getElementById('login-email').value;
  var exists = state.users.some(function(u){ return u.email === email && !u.blocked; });
  if (!exists) {
    state.users.unshift({
      id: Date.now(),
      name: email.split('@')[0] || 'New user',
      email: email,
      meta: 'Logged in just now',
      blocked: false
    });
  }
  go('events');
}

function doLogout() {
  go('login');
}

document.getElementById('admin-title').addEventListener('input', function(e){ state.title = e.target.value; });
document.getElementById('admin-date').addEventListener('input', function(e){ state.date = e.target.value; });
document.getElementById('admin-venue').addEventListener('input', function(e){ state.venue = e.target.value; });
document.getElementById('admin-cover').addEventListener('input', function(e){ state.cover = e.target.value; });

renderEvents();
