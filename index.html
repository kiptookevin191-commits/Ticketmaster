<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ticketmaster</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body { background: #f0f0f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
  .phone { width: 375px; height: 750px; background: #fff; border-radius: 30px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.15); position: relative; }
  .screen { display: none; height: 100%; overflow-y: auto; position: relative; }
  .screen.active { display: block; }

  /* LOGIN */
  #screen-login { background: #F6F7F9; display: none; align-items: center; justify-content: center; padding: 24px; }
  #screen-login.active { display: flex; }
  .login-card { width: 100%; max-width: 340px; background: #fff; border-radius: 20px; padding: 28px 22px; box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
  .tm-logo { width: 72px; height: 72px; background: #0d72ff; border-radius: 18px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
  .tm-logo svg { width: 42px; height: 42px; fill: #fff; }
  .login-title { text-align: center; font-size: 22px; font-weight: 800; color: #000; }
  .login-sub { text-align: center; font-size: 13px; color: #888; margin-top: 4px; margin-bottom: 24px; }
  .login-label { display: block; font-size: 10px; font-weight: 800; color: #666; text-transform: uppercase; margin-bottom: 6px; margin-top: 14px; }
  .login-label:first-of-type { margin-top: 0; }
  .login-input { width: 100%; border: 1px solid #e0e0e0; border-radius: 10px; padding: 13px 14px; font-size: 14px; outline: none; background: #fff; }
  .login-input:focus { border-color: #0d72ff; }
  .login-btn { width: 100%; background: #0d72ff; color: #fff; font-weight: 700; font-size: 14px; padding: 15px; border-radius: 10px; border: none; cursor: pointer; margin-top: 22px; }
  .login-hint { text-align: center; font-size: 11px; color: #aaa; margin-top: 14px; }

  /* EVENTS */
  #screen-events { background: #fff; }
  .ev-header { background: #000; color: #fff; padding: 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #222; }
  .ev-header-left { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 16px; }
  .ev-header-right { display: flex; gap: 16px; font-size: 12px; align-items: center; }
  .ev-tabs { display: flex; background: #000; color: #666; font-size: 12px; font-weight: 700; border-bottom: 1px solid #222; }
  .ev-tab { flex: 1; text-align: center; padding: 14px 0; }
  .ev-tab.active { color: #fff; border-bottom: 2px solid #fff; }
  .ev-list { padding: 16px; padding-bottom: 90px; }
  .ev-card { background: #fff; border: 1px solid #eaeaea; border-radius: 10px; overflow: hidden; margin-bottom: 16px; cursor: pointer; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
  .ev-img-wrap { position: relative; height: 180px; }
  .ev-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ev-date-badge { position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.7); padding: 4px 8px; border-radius: 3px; }
  .ev-date-badge span { color: #fff; font-size: 10px; font-weight: 700; }
  .ev-body { padding: 16px; }
  .ev-title { color: #000; font-size: 15px; font-weight: 800; text-transform: uppercase; line-height: 1.2; margin-bottom: 14px; }
  .ev-bottom { display: flex; justify-content: space-between; align-items: center; color: #888; font-size: 12px; border-top: 1px solid #eee; padding-top: 14px; }
  .ev-ticket-count { color: #000; font-weight: 700; display: flex; align-items: center; gap: 4px; font-size: 12px; }

  .nav { position: absolute; bottom: 0; left: 0; right: 0; background: #fff; border-top: 1px solid #eee; display: flex; justify-content: space-around; padding: 12px 0 20px 0; }
  .nav-btn { display: flex; flex-direction: column; align-items: center; gap: 3px; color: #999; font-size: 10px; font-weight: 700; background: none; border: none; cursor: pointer; position: relative; }
  .nav-btn.active { color: #0d72ff; }
  .nav-badge { position: absolute; top: -3px; right: -6px; background: #ff3b30; color: #fff; font-size: 9px; font-weight: 700; width: 15px; height: 15px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

  /* DETAILS */
  #screen-details { background: #000; }
  .dt-header { padding: 16px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #222; color: #fff; font-weight: 700; font-size: 16px; background: #000; }
  .dt-back { background: none; border: none; color: #fff; cursor: pointer; font-size: 20px; }
  .dt-body { padding: 16px; }
  .dt-card { background: #1c1c1e; border-radius: 10px; overflow: hidden; border: 1px solid #222; margin-bottom: 16px; }
  .dt-hero { position: relative; height: 150px; }
  .dt-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .dt-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.95), transparent); }
  .dt-hero-info { position: absolute; bottom: 12px; left: 14px; right: 14px; }
  .dt-hero-date { color: #fff; font-size: 10px; font-weight: 700; text-transform: uppercase; margin-bottom: 4px; }
  .dt-hero-title { color: #fff; font-size: 15px; font-weight: 800; text-transform: uppercase; line-height: 1.2; }
  .dt-hero-venue { padding: 12px 14px; display: flex; justify-content: space-between; color: #ccc; font-size: 12px; border-top: 1px solid #222; }

  .btn-view { width: 100%; background: #0d72ff; color: #fff; font-weight: 700; padding: 14px; border-radius: 10px; border: none; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 13px; margin-bottom: 16px; cursor: pointer; }
  .btn-transfer { width: 100%; background: #fff; border: 2px solid #0d72ff; color: #0d72ff; font-weight: 700; padding: 12px; border-radius: 10px; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 13px; margin-bottom: 16px; cursor: pointer; }

  .action-bar { background: #fff; border-radius: 10px; padding: 14px 0; display: flex; justify-content: space-around; margin-bottom: 16px; }
  .action-btn { display: flex; flex-direction: column; align-items: center; gap: 4px; background: none; border: none; cursor: pointer; font-size: 10px; font-weight: 700; }
  .action-btn.blue { color: #0d72ff; }
  .action-btn.grey { color: #ccc; }

  .dt-tabs { display: flex; background: #fff; margin-bottom: 0; }
  .dt-tab { flex: 1; text-align: center; padding: 14px 0; font-size: 14px; font-weight: 700; color: #666; cursor: pointer; }
  .dt-tab.active { color: #000; border-bottom: 3px solid #000; }

  .order-head { display: flex; justify-content: space-between; align-items: flex-start; margin: 16px 0 12px; color: #000; }
  .order-id { font-size: 13px; font-weight: 700; }
  .order-count { font-size: 11px; color: #888; margin-top: 2px; }

  .stub { background: #f5f5f5; border-radius: 10px; padding: 16px; margin-bottom: 10px; color: #000; }
  .stub-head { display: flex; justify-content: space-between; margin-bottom: 14px; }
  .stub-type { font-weight: 800; font-size: 13px; color: #000; }
  .stub-sub { color: #888; font-size: 11px; font-weight: 600; }
  .stub-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; text-align: center; gap: 8px; }
  .stub-label { font-size: 9px; color: #999; font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 4px; }
  .stub-val { font-size: 13px; font-weight: 800; color: #000; }
  .stub.transferred { opacity: 0.4; }

  /* BARCODE */
  #screen-barcode { background: #000; }
  .bc-top { background: #0d72ff; color: #fff; padding: 16px; text-align: center; font-weight: 800; font-style: italic; font-size: 20px; }
  .bc-main { position: relative; height: calc(100% - 56px); background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600') center/cover; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; }
  .bc-card { width: 100%; background: #fff; border-radius: 18px; padding: 22px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
  .bc-msg { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
  .bc-msg span { flex: 1; text-align: center; color: #333; font-size: 13px; padding-left: 20px; }
  .bc-refresh { color: #666; font-size: 18px; }
  .bc-wrap { position: relative; height: 95px; overflow: hidden; padding: 6px 0; }
  .bc-lines { height: 100%; background: repeating-linear-gradient(90deg, #000 0, #000 2px, #fff 2px, #fff 4px, #000 4px, #000 7px, #fff 7px, #fff 9px, #000 9px, #000 11px, #fff 11px, #fff 12px); }
  .bc-scan { position: absolute; top: 0; bottom: 0; width: 3px; background: #0d72ff; box-shadow: 0 0 14px 2px #0d72ff; animation: scan 2.5s ease-in-out infinite alternate; }
  @keyframes scan { 0% { left: 4%; } 100% { left: 94%; } }
  .bc-hint { text-align: center; color: #999; font-size: 11px; margin-top: 10px; }
  .bc-info { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; text-align: center; border-top: 1px solid #eee; padding-top: 14px; margin-top: 18px; }
  .bc-info-label { font-size: 9px; color: #999; font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 4px; }
  .bc-info-val { font-size: 11px; font-weight: 800; color: #000; }
  .bc-footer { color: #fff; font-size: 11px; margin-top: 16px; }
  .bc-back { margin-top: 16px; color: #fff; font-size: 12px; text-decoration: underline; background: none; border: none; cursor: pointer; }

  /* SHARED */
  .p-header { background: #fff; padding: 16px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #eee; font-weight: 700; font-size: 16px; color: #000; }
  .p-back { background: none; border: none; font-size: 20px; cursor: pointer; color: #000; }
  .p-body { padding: 16px; }

  /* SELECT */
  #screen-select { background: #F6F7F9; }
  .sel-hint { font-size: 13px; color: #666; margin-bottom: 16px; }
  .sel-ticket { background: #fff; border: 1px solid #eaeaea; border-radius: 12px; padding: 16px; margin-bottom: 12px; display: flex; gap: 14px; cursor: pointer; }
  .sel-ticket.selected { border-color: #0d72ff; background: #f5f9ff; }
  .sel-check { width: 22px; height: 22px; border: 2px solid #ccc; border-radius: 6px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
  .sel-ticket.selected .sel-check { background: #0d72ff; border-color: #0d72ff; }
  .sel-check::after { content: ''; width: 6px; height: 10px; border: solid #fff; border-width: 0 2px 2px 0; transform: rotate(45deg) translate(-1px, -1px); display: none; }
  .sel-ticket.selected .sel-check::after { display: block; }
  .sel-ticket-body { flex: 1; }
  .sel-ticket-type { font-weight: 800; font-size: 14px; color: #000; }
  .sel-ticket-sub { font-size: 11px; color: #999; margin-bottom: 10px; }
  .sel-ticket-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; text-align: center; gap: 6px; }
  .sel-ticket-label { font-size: 9px; color: #999; font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 3px; }
  .sel-ticket-val { font-size: 12px; font-weight: 800; color: #000; }
  .btn-continue { width: 100%; background: #0d72ff; color: #fff; font-weight: 700; padding: 15px; border-radius: 10px; border: none; font-size: 13px; cursor: pointer; margin-top: 16px; }
  .btn-continue:disabled { background: #ccc; cursor: not-allowed; }

  /* SECURITY */
  #screen-security { background: #F6F7F9; }
  .sec-card { background: #fff; border-radius: 16px; padding: 26px 20px; border: 1px solid #eaeaea; text-align: center; }
  .sec-icon { width: 56px; height: 56px; background: #eaf3ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; }
  .sec-title { font-weight: 800; font-size: 18px; color: #000; margin-bottom: 8px; }
  .sec-sub { font-size: 13px; color: #666; margin-bottom: 24px; line-height: 1.4; }
  .sec-code { display: flex; justify-content: center; gap: 8px; margin-bottom: 24px; }
  .sec-digit { width: 42px; height: 50px; border: 1px solid #e0e0e0; border-radius: 10px; text-align: center; font-size: 20px; font-weight: 800; outline: none; }
  .sec-digit:focus { border-color: #0d72ff; }

  /* RECIPIENT */
  #screen-recipient { background: #F6F7F9; }
  .rec-card { background: #fff; border-radius: 14px; padding: 18px; border: 1px solid #eaeaea; }
  .rec-label { display: block; font-size: 10px; font-weight: 800; color: #666; text-transform: uppercase; margin-bottom: 6px; margin-top: 14px; }
  .rec-label:first-of-type { margin-top: 0; }
  .rec-input { width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; padding: 12px 14px; font-size: 13px; outline: none; background: #fff; font-family: inherit; }
  .rec-textarea { width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; padding: 12px 14px; font-size: 13px; outline: none; resize: none; font-family: inherit; }
  .rec-note { background: #eaf3ff; color: #0d72ff; font-weight: 700; padding: 12px 14px; border-radius: 8px; font-size: 12px; margin-top: 16px; }

  /* ADMIN */
  #screen-admin { background: #F6F7F9; }
  .ad-header { background: #fff; padding: 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #eee; font-weight: 700; font-size: 16px; }
  .ad-header-left { display: flex; align-items: center; gap: 12px; }
  .ad-logout { background: #fff0f0; color: #c62828; border: 1px solid #ffd0d0; font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 6px; cursor: pointer; }
  .ad-card { background: #fff; border: 1px solid #eaeaea; border-radius: 12px; padding: 18px; margin-bottom: 16px; }
  .ad-card-title { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 14px; color: #000; margin-bottom: 16px; }
  .ad-label { display: block; font-size: 10px; font-weight: 800; color: #666; text-transform: uppercase; margin-bottom: 6px; margin-top: 14px; }
  .ad-label:first-of-type { margin-top: 0; }
  .ad-input { width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; padding: 11px 13px; font-size: 13px; outline: none; }
  .ad-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
  .ad-tickets-label { color: #0d72ff; font-size: 11px; font-weight: 800; text-transform: uppercase; }
  .ad-add-btn { display: flex; align-items: center; gap: 4px; background: #0d72ff; color: #fff; font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 6px; border: none; cursor: pointer; }
  .ad-ticket { background: #F6F7F9; border: 1px solid #e5e5e5; border-radius: 10px; padding: 12px; margin-bottom: 10px; }
  .ad-ticket-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
  .ad-ticket-num { font-size: 12px; font-weight: 800; }
  .ad-delete-btn { background: none; border: none; color: #ff3b30; font-size: 12px; font-weight: 700; cursor: pointer; }
  .ad-ticket-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
  .ad-ticket-grid input { border: 1px solid #e0e0e0; border-radius: 6px; padding: 8px 10px; font-size: 12px; outline: none; background: #fff; width: 100%; }

  /* USERS */
  .user-card { display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #eaeaea; border-radius: 10px; background: #fff; margin-bottom: 10px; }
  .user-card.blocked { background: #fff5f5; border-color: #ffd0d0; }
  .user-info { flex: 1; min-width: 0; }
  .user-name { font-size: 13px; font-weight: 800; color: #000; margin-bottom: 2px; }
  .user-email { font-size: 11px; color: #888; }
  .user-meta { font-size: 10px; color: #aaa; margin-top: 2px; }
  .user-status { display: inline-block; font-size: 9px; font-weight: 800; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; }
  .user-status.online { background: #e6f4ea; color: #1e7e34; }
  .user-status.blocked-status { background: #ffe5e5; color: #c62828; }
  .user-actions { display: flex; gap: 6px; margin-left: 8px; }
  .user-btn { border: none; border-radius: 6px; font-size: 10px; font-weight: 700; padding: 7px 10px; cursor: pointer; white-space: nowrap; }
  .user-btn.logout { background: #fff0f0; color: #c62828; border: 1px solid #ffd0d0; }
  .user-btn.restore { background: #e6f4ea; color: #1e7e34; border: 1px solid #b8ddc1; }

  /* MODAL */
  .modal-bg { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: none; align-items: center; justify-content: center; z-index: 999; padding: 20px; }
  .modal-bg.show { display: flex; }
  .modal-card { background: #fff; border-radius: 20px; padding: 32px 24px; text-align: center; max-width: 340px; width: 100%; }
  .modal-check { width: 80px; height: 80px; border-radius: 50%; border: 4px solid #0d72ff; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; background: #eaf3ff; }
  .modal-check svg { width: 40px; height: 40px; stroke: #0d72ff; fill: none; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
  .modal-title { font-size: 24px; font-weight: 800; color: #000; margin-bottom: 8px; }
  .modal-sub { font-size: 14px; color: #666; margin-bottom: 26px; }
  .modal-btn { width: 100%; background: #0d72ff; color: #fff; font-weight: 700; padding: 15px; border-radius: 10px; border: none; font-size: 14px; cursor: pointer; }

  .ico { width: 20px; height: 20px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .ico-sm { width: 14px; height: 14px; }
</style>
</head>
<body>

<div class="phone">

  <!-- LOGIN -->
  <div id="screen-login" class="screen active">
    <div class="login-card">
      <div class="tm-logo">
        <svg viewBox="0 0 24 24"><path d="M14.5 2.5c-.3 0-.6.2-.7.5l-1.3 5.5H8.5c-.4 0-.7.3-.8.7l-.3 1.5c-.1.4.2.8.7.8h3l-2.6 10.5c-.2 1 .5 1.8 1.5 1.8.4 0 .8-.1 1.1-.3l4.6-3c.3-.2.4-.5.3-.8l-.4-1.4c-.1-.4-.6-.6-.9-.4l-2.2 1.4 2.2-8.8h3.1c.4 0 .8-.3.8-.7l.3-1.5c.1-.4-.2-.8-.7-.8h-3.1l1.3-5c0-.2 0-.4-.1-.5-.1-.1-.3-.2-.5-.2z"/></svg>
      </div>
      <div class="login-title">ticketmaster</div>
      <div class="login-sub">Sign in to manage your tickets</div>
      <label class="login-label">Email</label>
      <input id="login-email" class="login-input" type="email" value="user@example.com" />
      <label class="login-label">Password</label>
      <input id="login-password" class="login-input" type="password" value="password" />
      <button class="login-btn" onclick="doLogin()">SIGN IN</button>
      <div class="login-hint">Use any email &amp; password to sign in</div>
    </div>
  </div>

    /* EVENTS */
  #screen-events { background: #fff; }
  .ev-header { background: #000; color: #fff; padding: 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #222; }
  .ev-header-left { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 16px; }
  .ev-header-right { display: flex; gap: 16px; font-size: 12px; align-items: center; }
  .ev-tabs { display: flex; background: #000; color: #666; font-size: 12px; font-weight: 700; border-bottom: 1px solid #222; }
  .ev-tab { flex: 1; text-align: center; padding: 14px 0; }
  .ev-tab.active { color: #fff; border-bottom: 2px solid #fff; }
  .ev-list { padding: 16px; padding-bottom: 90px; }
  .ev-card { background: #fff; border: 1px solid #eaeaea; border-radius: 10px; overflow: hidden; margin-bottom: 16px; cursor: pointer; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
  .ev-img-wrap { position: relative; height: 180px; }
  .ev-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ev-date-badge { position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.7); padding: 4px 8px; border-radius: 3px; }
  .ev-date-badge span { color: #fff; font-size: 10px; font-weight: 700; }
  .ev-body { padding: 16px; }
  .ev-title { color: #000; font-size: 15px; font-weight: 800; text-transform: uppercase; line-height: 1.2; margin-bottom: 14px; }
  .ev-bottom { display: flex; justify-content: space-between; align-items: center; color: #888; font-size: 12px; border-top: 1px solid #eee; padding-top: 14px; }
  .ev-ticket-count { color: #000; font-weight: 700; display: flex; align-items: center; gap: 4px; font-size: 12px; }

  .nav { position: absolute; bottom: 0; left: 0; right: 0; background: #fff; border-top: 1px solid #eee; display: flex; justify-content: space-around; padding: 12px 0 20px 0; }
  .nav-btn { display: flex; flex-direction: column; align-items: center; gap: 3px; color: #999; font-size: 10px; font-weight: 700; background: none; border: none; cursor: pointer; position: relative; }
  .nav-btn.active { color: #0d72ff; }
  .nav-badge { position: absolute; top: -3px; right: -6px; background: #ff3b30; color: #fff; font-size: 9px; font-weight: 700; width: 15px; height: 15px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

  /* DETAILS */
  #screen-details { background: #000; }
  .dt-header { padding: 16px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #222; color: #fff; font-weight: 700; font-size: 16px; background: #000; }
  .dt-back { background: none; border: none; color: #fff; cursor: pointer; font-size: 20px; }
  .dt-body { padding: 16px; }
  .dt-card { background: #1c1c1e; border-radius: 10px; overflow: hidden; border: 1px solid #222; margin-bottom: 16px; }
  .dt-hero { position: relative; height: 150px; }
  .dt-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .dt-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.95), transparent); }
  .dt-hero-info { position: absolute; bottom: 12px; left: 14px; right: 14px; }
  .dt-hero-date { color: #fff; font-size: 10px; font-weight: 700; text-transform: uppercase; margin-bottom: 4px; }
  .dt-hero-title { color: #fff; font-size: 15px; font-weight: 800; text-transform: uppercase; line-height: 1.2; }
  .dt-hero-venue { padding: 12px 14px; display: flex; justify-content: space-between; color: #ccc; font-size: 12px; border-top: 1px solid #222; }

  .btn-view { width: 100%; background: #0d72ff; color: #fff; font-weight: 700; padding: 14px; border-radius: 10px; border: none; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 13px; margin-bottom: 16px; cursor: pointer; }
  .btn-transfer { width: 100%; background: #fff; border: 2px solid #0d72ff; color: #0d72ff; font-weight: 700; padding: 12px; border-radius: 10px; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 13px; margin-bottom: 16px; cursor: pointer; }

  .action-bar { background: #fff; border-radius: 10px; padding: 14px 0; display: flex; justify-content: space-around; margin-bottom: 16px; }
  .action-btn { display: flex; flex-direction: column; align-items: center; gap: 4px; background: none; border: none; cursor: pointer; font-size: 10px; font-weight: 700; }
  .action-btn.blue { color: #0d72ff; }
  .action-btn.grey { color: #ccc; }

  .dt-tabs { display: flex; background: #fff; margin-bottom: 0; }
  .dt-tab { flex: 1; text-align: center; padding: 14px 0; font-size: 14px; font-weight: 700; color: #666; cursor: pointer; }
  .dt-tab.active { color: #000; border-bottom: 3px solid #000; }

  .order-head { display: flex; justify-content: space-between; align-items: flex-start; margin: 16px 0 12px; color: #000; }
  .order-id { font-size: 13px; font-weight: 700; }
  .order-count { font-size: 11px; color: #888; margin-top: 2px; }

  .stub { background: #f5f5f5; border-radius: 10px; padding: 16px; margin-bottom: 10px; color: #000; }
  .stub-head { display: flex; justify-content: space-between; margin-bottom: 14px; }
  .stub-type { font-weight: 800; font-size: 13px; color: #000; }
  .stub-sub { color: #888; font-size: 11px; font-weight: 600; }
  .stub-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; text-align: center; gap: 8px; }
  .stub-label { font-size: 9px; color: #999; font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 4px; }
  .stub-val { font-size: 13px; font-weight: 800; color: #000; }
  .stub.transferred { opacity: 0.4; }

  /* BARCODE */
  #screen-barcode { background: #000; }
  .bc-top { background: #0d72ff; color: #fff; padding: 16px; text-align: center; font-weight: 800; font-style: italic; font-size: 20px; }
  .bc-main { position: relative; height: calc(100% - 56px); background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600') center/cover; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; }
  .bc-card { width: 100%; background: #fff; border-radius: 18px; padding: 22px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
  .bc-msg { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
  .bc-msg span { flex: 1; text-align: center; color: #333; font-size: 13px; padding-left: 20px; }
  .bc-refresh { color: #666; font-size: 18px; }
  .bc-wrap { position: relative; height: 95px; overflow: hidden; padding: 6px 0; }
  .bc-lines { height: 100%; background: repeating-linear-gradient(90deg, #000 0, #000 2px, #fff 2px, #fff 4px, #000 4px, #000 7px, #fff 7px, #fff 9px, #000 9px, #000 11px, #fff 11px, #fff 12px); }
  .bc-scan { position: absolute; top: 0; bottom: 0; width: 3px; background: #0d72ff; box-shadow: 0 0 14px 2px #0d72ff; animation: scan 2.5s ease-in-out infinite alternate; }
  @keyframes scan { 0% { left: 4%; } 100% { left: 94%; } }
  .bc-hint { text-align: center; color: #999; font-size: 11px; margin-top: 10px; }
  .bc-info { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; text-align: center; border-top: 1px solid #eee; padding-top: 14px; margin-top: 18px; }
  .bc-info-label { font-size: 9px; color: #999; font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 4px; }
  .bc-info-val { font-size: 11px; font-weight: 800; color: #000; }
  .bc-footer { color: #fff; font-size: 11px; margin-top: 16px; }
  .bc-back { margin-top: 16px; color: #fff; font-size: 12px; text-decoration: underline; background: none; border: none; cursor: pointer; }

  /* SHARED */
  .p-header { background: #fff; padding: 16px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #eee; font-weight: 700; font-size: 16px; color: #000; }
  .p-back { background: none; border: none; font-size: 20px; cursor: pointer; color: #000; }
  .p-body { padding: 16px; }

  /* SELECT */
  #screen-select { background: #F6F7F9; }
  .sel-hint { font-size: 13px; color: #666; margin-bottom: 16px; }
  .sel-ticket { background: #fff; border: 1px solid #eaeaea; border-radius: 12px; padding: 16px; margin-bottom: 12px; display: flex; gap: 14px; cursor: pointer; }
  .sel-ticket.selected { border-color: #0d72ff; background: #f5f9ff; }
  .sel-check { width: 22px; height: 22px; border: 2px solid #ccc; border-radius: 6px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
  .sel-ticket.selected .sel-check { background: #0d72ff; border-color: #0d72ff; }
  .sel-check::after { content: ''; width: 6px; height: 10px; border: solid #fff; border-width: 0 2px 2px 0; transform: rotate(45deg) translate(-1px, -1px); display: none; }
  .sel-ticket.selected .sel-check::after { display: block; }
  .sel-ticket-body { flex: 1; }
  .sel-ticket-type { font-weight: 800; font-size: 14px; color: #000; }
  .sel-ticket-sub { font-size: 11px; color: #999; margin-bottom: 10px; }
  .sel-ticket-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; text-align: center; gap: 6px; }
  .sel-ticket-label { font-size: 9px; color: #999; font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 3px; }
  .sel-ticket-val { font-size: 12px; font-weight: 800; color: #000; }
  .btn-continue { width: 100%; background: #0d72ff; color: #fff; font-weight: 700; padding: 15px; border-radius: 10px; border: none; font-size: 13px; cursor: pointer; margin-top: 16px; }
  .btn-continue:disabled { background: #ccc; cursor: not-allowed; }

      /* SECURITY */
  #screen-security { background: #F6F7F9; }
  .sec-card { background: #fff; border-radius: 16px; padding: 26px 20px; border: 1px solid #eaeaea; text-align: center; }
  .sec-icon { width: 56px; height: 56px; background: #eaf3ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; }
  .sec-title { font-weight: 800; font-size: 18px; color: #000; margin-bottom: 8px; }
  .sec-sub { font-size: 13px; color: #666; margin-bottom: 24px; line-height: 1.4; }
  .sec-code { display: flex; justify-content: center; gap: 8px; margin-bottom: 24px; }
  .sec-digit { width: 42px; height: 50px; border: 1px solid #e0e0e0; border-radius: 10px; text-align: center; font-size: 20px; font-weight: 800; outline: none; }
  .sec-digit:focus { border-color: #0d72ff; }

  /* RECIPIENT */
  #screen-recipient { background: #F6F7F9; }
  .rec-card { background: #fff; border-radius: 14px; padding: 18px; border: 1px solid #eaeaea; }
  .rec-label { display: block; font-size: 10px; font-weight: 800; color: #666; text-transform: uppercase; margin-bottom: 6px; margin-top: 14px; }
  .rec-label:first-of-type { margin-top: 0; }
  .rec-input { width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; padding: 12px 14px; font-size: 13px; outline: none; background: #fff; font-family: inherit; }
  .rec-textarea { width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; padding: 12px 14px; font-size: 13px; outline: none; resize: none; font-family: inherit; }
  .rec-note { background: #eaf3ff; color: #0d72ff; font-weight: 700; padding: 12px 14px; border-radius: 8px; font-size: 12px; margin-top: 16px; }

  /* ADMIN */
  #screen-admin { background: #F6F7F9; }
  .ad-header { background: #fff; padding: 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #eee; font-weight: 700; font-size: 16px; }
  .ad-header-left { display: flex; align-items: center; gap: 12px; }
  .ad-logout { background: #fff0f0; color: #c62828; border: 1px solid #ffd0d0; font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 6px; cursor: pointer; }
  .ad-card { background: #fff; border: 1px solid #eaeaea; border-radius: 12px; padding: 18px; margin-bottom: 16px; }
  .ad-card-title { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 14px; color: #000; margin-bottom: 16px; }
  .ad-label { display: block; font-size: 10px; font-weight: 800; color: #666; text-transform: uppercase; margin-bottom: 6px; margin-top: 14px; }
  .ad-label:first-of-type { margin-top: 0; }
  .ad-input { width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; padding: 11px 13px; font-size: 13px; outline: none; }
  .ad-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
  .ad-tickets-label { color: #0d72ff; font-size: 11px; font-weight: 800; text-transform: uppercase; }
  .ad-add-btn { display: flex; align-items: center; gap: 4px; background: #0d72ff; color: #fff; font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 6px; border: none; cursor: pointer; }
  .ad-ticket { background: #F6F7F9; border: 1px solid #e5e5e5; border-radius: 10px; padding: 12px; margin-bottom: 10px; }
  .ad-ticket-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
  .ad-ticket-num { font-size: 12px; font-weight: 800; }
  .ad-delete-btn { background: none; border: none; color: #ff3b30; font-size: 12px; font-weight: 700; cursor: pointer; }
  .ad-ticket-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
  .ad-ticket-grid input { border: 1px solid #e0e0e0; border-radius: 6px; padding: 8px 10px; font-size: 12px; outline: none; background: #fff; width: 100%; }

  /* USERS */
  .user-card { display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #eaeaea; border-radius: 10px; background: #fff; margin-bottom: 10px; }
  .user-card.blocked { background: #fff5f5; border-color: #ffd0d0; }
  .user-info { flex: 1; min-width: 0; }
  .user-name { font-size: 13px; font-weight: 800; color: #000; margin-bottom: 2px; }
  .user-email { font-size: 11px; color: #888; }
  .user-meta { font-size: 10px; color: #aaa; margin-top: 2px; }
  .user-status { display: inline-block; font-size: 9px; font-weight: 800; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; }
  .user-status.online { background: #e6f4ea; color: #1e7e34; }
  .user-status.blocked-status { background: #ffe5e5; color: #c62828; }
  .user-actions { display: flex; gap: 6px; margin-left: 8px; }
  .user-btn { border: none; border-radius: 6px; font-size: 10px; font-weight: 700; padding: 7px 10px; cursor: pointer; white-space: nowrap; }
  .user-btn.logout { background: #fff0f0; color: #c62828; border: 1px solid #ffd0d0; }
  .user-btn.restore { background: #e6f4ea; color: #1e7e34; border: 1px solid #b8ddc1; }

  /* MODAL */
  .modal-bg { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: none; align-items: center; justify-content: center; z-index: 999; padding: 20px; }
  .modal-bg.show { display: flex; }
  .modal-card { background: #fff; border-radius: 20px; padding: 32px 24px; text-align: center; max-width: 340px; width: 100%; }
  .modal-check { width: 80px; height: 80px; border-radius: 50%; border: 4px solid #0d72ff; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; background: #eaf3ff; }
  .modal-check svg { width: 40px; height: 40px; stroke: #0d72ff; fill: none; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
  .modal-title { font-size: 24px; font-weight: 800; color: #000; margin-bottom: 8px; }
  .modal-sub { font-size: 14px; color: #666; margin-bottom: 26px; }
  .modal-btn { width: 100%; background: #0d72ff; color: #fff; font-weight: 700; padding: 15px; border-radius: 10px; border: none; font-size: 14px; cursor: pointer; }

  .ico { width: 20px; height: 20px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .ico-sm { width: 14px; height: 14px; }
</style>
</head>
<body>

<div class="phone">

  <!-- LOGIN -->
  <div id="screen-login" class="screen active">
    <div class="login-card">
      <div class="tm-logo">
        <svg viewBox="0 0 24 24"><path d="M14.5 2.5c-.3 0-.6.2-.7.5l-1.3 5.5H8.5c-.4 0-.7.3-.8.7l-.3 1.5c-.1.4.2.8.7.8h3l-2.6 10.5c-.2 1 .5 1.8 1.5 1.8.4 0 .8-.1 1.1-.3l4.6-3c.3-.2.4-.5.3-.8l-.4-1.4c-.1-.4-.6-.6-.9-.4l-2.2 1.4 2.2-8.8h3.1c.4 0 .8-.3.8-.7l.3-1.5c.1-.4-.2-.8-.7-.8h-3.1l1.3-5c0-.2 0-.4-.1-.5-.1-.1-.3-.2-.5-.2z"/></svg>
      </div>
      <div class="login-title">ticketmaster</div>
      <div class="login-sub">Sign in to manage your tickets</div>
      <label class="login-label">Email</label>
      <input id="login-email" class="login-input" type="email" value="user@example.com" />
      <label class="login-label">Password</label>
      <input id="login-password" class="login-input" type="password" value="password" />
      <button class="login-btn" onclick="doLogin()">SIGN IN</button>
      <div class="login-hint">Use any email &amp; password to sign in</div>
    </div>
  </div>

  <!-- EVENTS -->
  <div id="screen-events" class="screen">
    <div class="ev-header">
      <div class="ev-header-left">
        <svg class="ico" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <span>My Events 🇺🇸</span>
      </div>
      <div class="ev-header-right">
        <svg class="ico" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        <svg class="ico" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span>Help</span>
      </div>
    </div>
    <div class="ev-tabs">
      <div class="ev-tab active">UPCOMING (7)</div>
      <div class="ev-tab">PAST (3)</div>
    </div>
    <div class="ev-list">
      <div class="ev-card" onclick="go('details')">
        <div class="ev-img-wrap">
          <img id="ev-cover" src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600" alt="Event">
          <div class="ev-date-badge"><span id="ev-date-badge">FRI • OCT 2, 2026 • 7:00 PM</span></div>
        </div>
        <div class="ev-body">
          <div id="ev-title" class="ev-title">BTS WORLD TOUR ARIRANG - BOGOTÁ</div>
          <div class="ev-bottom">
            <span id="ev-venue">Estadio El Campín, Bogotá</span>
            <div class="ev-ticket-count">
              <svg class="ico ico-sm" viewBox="0 0 24 24"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2M13 17v2M13 11v2"/></svg>
              <span id="ev-ticket-count">x3</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ev-card">
        <div class="ev-img-wrap">
          <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600" alt="Hockey">
          <div class="ev-date-badge"><span>SUN • OCT 11, 2026 • 7:30 PM</span></div>
        </div>
        <div class="ev-body">
          <div class="ev-title">PACIFIC TITANS VS HARBOR HAWKS</div>
          <div class="ev-bottom">
            <span>Pacific Dome Arena, Los Angeles</span>
            <div class="ev-ticket-count">
              <svg class="ico ico-sm" viewBox="0 0 24 24"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2M13 17v2M13 11v2"/></svg>
              <span>x3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <button class="nav-btn">
        <svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
        <span>Discover</span>
      </button>
      <button class="nav-btn">
        <svg class="ico" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <span>Favorites</span>
      </button>
      <button class="nav-btn active">
        <svg class="ico" viewBox="0 0 24 24"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2M13 17v2M13 11v2"/></svg>
        <span>My Tickets</span>
      </button>
      <button class="nav-btn">
        <svg class="ico" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        <span>Sell</span>
      </button>
      <button class="nav-btn" onclick="go('admin')">
        <svg class="ico" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span>Account</span>
        <span class="nav-badge">1</span>
      </button>
    </div>
  </div>

  <!-- DETAILS -->
  <div id="screen-details" class="screen">
    <div class="dt-header">
      <button class="dt-back" onclick="go('events')">←</button>
      <span>Event Details</span>
    </div>
    <div class="dt-body">
      <div class="dt-card">
        <div class="dt-hero">
          <img id="dt-cover" src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600" alt="Event">
          <div class="dt-hero-overlay"></div>
          <div class="dt-hero-info">
            <div id="dt-date" class="dt-hero-date">FRI • OCT 2, 2026</div>
            <div id="dt-title" class="dt-hero-title">BTS WORLD TOUR ARIRANG</div>
          </div>
        </div>
        <div class="dt-hero-venue">
          <span id="dt-venue">Estadio El Campín</span>
          <span id="dt-count" style="color:#fff; font-weight:700;">x3</span>
        </div>
      </div>
      <button class="btn-view" onclick="go('barcode')">
        <svg class="ico ico-sm" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        VIEW TICKETS
      </button>
      <button class="btn-transfer" onclick="startTransfer()">
        <svg class="ico ico-sm" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
        TRANSFER TICKETS
      </button>
      <div class="action-bar">
        <button class="action-btn blue" onclick="startTransfer()">
          <svg class="ico" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
          <span>Transfer</span>
        </button>
        <button class="action-btn grey">
          <svg class="ico" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>Sell</span>
        </button>
        <button class="action-btn blue">
          <svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          <span>More</span>
        </button>
      </div>
      <div class="dt-tabs">
        <div class="dt-tab active">Tickets</div>
        <div class="dt-tab">Extras</div>
      </div>
      <div class="order-head">
        <div>
          <div class="order-id">Order #TM-SEED-BTS-CO</div>
          <div class="order-count" id="dt-ticket-label">x3 Tickets</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
      </div>
      <div id="ticket-list"></div>
    </div>
  </div>

    <!-- BARCODE -->
<div id="screen-barcode" class="screen">
  <div class="bc-top">ticketmaster</div>
  <div class="bc-main">
    <div class="bc-card">
      <div class="bc-msg">
        <span>Screenshots won't get you in</span>
        <span class="bc-refresh">↻</span>
      </div>
      <div class="bc-wrap">
        <div class="bc-lines"></div>
        <div class="bc-scan"></div>
      </div>
      <div class="bc-hint">Scan at entrance</div>
      <div class="bc-info">
        <div><span class="bc-info-label">Section</span><span id="bc-section" class="bc-info-val">Occidental Baja</span></div>
        <div><span class="bc-info-label">Row</span><span id="bc-row" class="bc-info-val">12</span></div>
        <div><span class="bc-info-label">Seat</span><span id="bc-seat" class="bc-info-val">5</span></div>
      </div>
    </div>
    <div class="bc-footer">Hold near reader to enter event</div>
    <button class="bc-back" onclick="go('details')">← Back to Details</button>
  </div>
</div>

<!-- SELECT TICKETS -->
<div id="screen-select" class="screen">
  <div class="p-header">
    <button class="p-back" onclick="go('details')">←</button>
    <span>Select Tickets</span>
  </div>
  <div class="p-body">
    <p class="sel-hint">Select the tickets you want to transfer.</p>
    <div id="select-list"></div>
    <button id="btn-continue" class="btn-continue" disabled onclick="go('security')">CONTINUE</button>
  </div>
</div>

<!-- SECURITY VERIFICATION -->
<div id="screen-security" class="screen">
  <div class="p-header">
    <button class="p-back" onclick="go('select')">←</button>
    <span>Security Verification</span>
  </div>
  <div class="p-body">
    <div class="sec-card">
      <div class="sec-icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0d72ff" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
      <div class="sec-title">Verify Transfer</div>
      <div class="sec-sub">Enter the 6-digit verification code to continue.</div>
      <div class="sec-code">
        <input class="sec-digit" maxlength="1" value="4" />
        <input class="sec-digit" maxlength="1" value="8" />
        <input class="sec-digit" maxlength="1" value="1" />
        <input class="sec-digit" maxlength="1" value="9" />
        <input class="sec-digit" maxlength="1" value="2" />
        <input class="sec-digit" maxlength="1" value="0" />
      </div>
      <button class="btn-continue" onclick="go('recipient')">CONTINUE</button>
    </div>
  </div>
</div>

<!-- RECIPIENT INFORMATION -->
<div id="screen-recipient" class="screen">
  <div class="p-header">
    <button class="p-back" onclick="go('security')">←</button>
    <span>Recipient Information</span>
  </div>
  <div class="p-body">
    <div class="rec-card">
      <label class="rec-label">First Name</label>
      <input class="rec-input" value="Sofia" />
      <label class="rec-label">Last Name</label>
      <input class="rec-input" value="Martinez" />
      <label class="rec-label">Email</label>
      <input class="rec-input" type="email" value="sofia.martinez@example.com" />
      <label class="rec-label">Note</label>
      <textarea class="rec-textarea" rows="3">Enjoy the concert! See you at the venue.</textarea>
      <div class="rec-note" id="rec-note">1 ticket selected for transfer.</div>
      <button class="btn-continue" onclick="finishTransfer()">CONTINUE</button>
    </div>
  </div>
</div>

<!-- ADMIN MANAGER -->
<div id="screen-admin" class="screen">
  <div class="ad-header">
    <div class="ad-header-left">
      <button class="p-back" onclick="go('events')">←</button>
      <span>Admin Manager</span>
    </div>
    <button class="ad-logout" onclick="doLogout()">Log out</button>
  </div>
  <div class="p-body">
    <div class="ad-card">
      <div class="ad-card-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d72ff" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/></svg>
        Event Settings
      </div>
      <label class="ad-label">Event Title</label>
      <input id="admin-title" class="ad-input" />
      <label class="ad-label">Date &amp; Time</label>
      <input id="admin-date" class="ad-input" />
      <label class="ad-label">Venue</label>
      <input id="admin-venue" class="ad-input" />
      <label class="ad-label">Cover Image URL</label>
      <input id="admin-cover" class="ad-input" />
    </div>
    <div class="ad-card">
      <div class="ad-header-row">
        <span class="ad-tickets-label">Individual Tickets (<span id="admin-count">3</span>)</span>
        <button class="ad-add-btn" onclick="addTicket()">+ ADD</button>
      </div>
      <div id="admin-ticket-list"></div>
    </div>
    <div class="ad-card">
      <div class="ad-card-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d72ff" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Active Users
      </div>
      <div id="user-list"></div>
    </div>
  </div>
</div>

<!-- SUCCESS MODAL -->
<div id="success-modal" class="modal-bg">
  <div class="modal-card">
    <div class="modal-check">
      <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <div class="modal-title">Successful!</div>
    <div class="modal-sub">Ticket Transfer was successful.</div>
    <button class="modal-btn" onclick="closeSuccess()">OK</button>
  </div>
</div>

</div>

<script>
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
    document.querySelectorAll('.screen').forEach(function(s){ s.classList.remove('active'); });
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
    document.getElementById('ev-ticket-count').textContent = 'x' + state.tickets.filter(function(t){ return !t.transferred; }).length;
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
        + '<div class="stub-head">'
        + '<div><div class="stub-type">Standard Ticket</div>'
        + '<div class="stub-sub">' + (t.transferred ? 'Transferred' : 'Mobile Ticket') + '</div></div></div>'
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
    state.tickets.forEach(function(t){
      if (t.id === id) t.selected = !t.selected;
    });
    renderSelect();
  }

  function updateContinueBtn() {
    var count = state.tickets.filter(function(t){ return t.selected && !t.transferred; }).length;
    var btn = document.getElementById('btn-continue');
    btn.disabled = count === 0;
    btn.textContent = count > 0 ? 'CONTINUE (' + count + ')' : 'CONTINUE';
  }

  function finishTransfer() {
    state.tickets.forEach(function(t){
      if (t.selected && !t.transferred) { t.transferred = true; t.selected = false; }
    });
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

  document.getElementById('admin-title').addEventListener('input', function(e){ state.title = e.target.value; });
  document.getElementById('admin-date').addEventListener('input', function(e){ state.date = e.target.value; });
  document.getElementById('admin-venue').addEventListener('input', function(e){ state.venue = e.target.value; });
  document.getElementById('admin-cover').addEventListener('input', function(e){ state.cover = e.target.value; });

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
    state.users.forEach(function(u){
      if (u.id === id) { u.blocked = true; u.meta = 'Blocked by admin'; }
    });
    renderUsers();
  }

  function restoreUser(id) {
    state.users.forEach(function(u){
      if (u.id === id) { u.blocked = false; u.meta = 'Logged in just now · restored'; }
    });
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

  renderEvents();
</script>

</body>
</html>
```
