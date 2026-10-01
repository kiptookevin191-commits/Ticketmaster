import React, { useState } from 'react';
import {
  Compass,
  Heart,
  Ticket,
  DollarSign,
  User,
  ArrowLeft,
  Trash2,
  Plus,
  SlidersHorizontal,
  QrCode,
  UserPlus,
  Lock,
  MoreHorizontal,
  ChevronLeft,
  RefreshCw,
  Check,
  ChevronRight,
} from 'lucide-react';

type TicketItem = {
  id: number;
  type: string;
  section: string;
  row: string;
  seat: string;
  selected: boolean;
  transferred?: boolean;
};

type EventData = {
  title: string;
  dateTime: string;
  venue: string;
  coverImage: string;
  orderNumber: string;
  tickets: TicketItem[];
};

type Recipient = {
  firstName: string;
  lastName: string;
  email: string;
  note: string;
};

/* =========================================================
   MOBILE TICKETS VIEW
   ========================================================= */

function MobileTicketsModal({
  eventData,
  seats,
  onClose,
}: {
  eventData: EventData;
  seats: TicketItem[];
  onClose: () => void;
}) {
  const [activeTicketIndex, setActiveTicketIndex] = useState(0);

  const activeTicket = seats[activeTicketIndex];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={eventData.coverImage}
          alt="Event Background"
          className="w-full h-full object-cover opacity-30 blur-sm"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/95" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 flex justify-between items-center px-4 py-3 bg-[#026CD1] text-white font-bold">

        <button
          onClick={onClose}
          className="p-1 rounded-full active:bg-white/10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <span className="italic font-extrabold text-lg tracking-tight">
          ticketmaster
        </span>

        <div className="w-6" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 py-6 overflow-y-auto">

        {/* EVENT TITLE */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-black uppercase text-white tracking-wide">
            {eventData.title}
          </h2>

          <p className="text-xs text-gray-300 font-bold mt-1">
            {eventData.dateTime}
          </p>
        </div>

        {/* TICKET CARD */}
        <div className="w-full max-w-sm bg-white text-black rounded-xl p-5 shadow-2xl space-y-4">

          <div className="flex justify-between items-center text-xs font-semibold text-gray-700">
            <span className="w-full text-center">
              Screenshots won't get you in
            </span>

            <RefreshCw className="w-4 h-4 text-gray-500" />
          </div>

          {/* BARCODE */}
          <div className="relative w-full h-24 bg-white border border-gray-100 flex items-center justify-center overflow-hidden py-2 px-1">

            <div
              className="w-full h-full opacity-90"
              style={{
                background:
                  'repeating-linear-gradient(90deg,#000,#000 2px,#fff 2px,#fff 4px,#000 4px,#000 7px,#fff 7px,#fff 9px)',
              }}
            />

            <div
              className="absolute top-0 bottom-0 w-1.5 bg-[#026CD1] shadow-[0_0_12px_#026CD1]"
              style={{
                animation: 'scanLine 2.5s ease-in-out infinite alternate',
              }}
            />
          </div>

          <p className="text-[11px] text-center text-gray-400 font-medium">
            Scan at entrance
          </p>

          {/* TICKET DETAILS */}
          {activeTicket && (
            <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-3 text-center">

              <div>
                <span className="block text-[9px] font-bold text-gray-400 uppercase">
                  SECTION
                </span>

                <span className="text-sm font-extrabold text-black">
                  {activeTicket.section}
                </span>
              </div>

              <div>
                <span className="block text-[9px] font-bold text-gray-400 uppercase">
                  ROW
                </span>

                <span className="text-sm font-extrabold text-black">
                  {activeTicket.row}
                </span>
              </div>

              <div>
                <span className="block text-[9px] font-bold text-gray-400 uppercase">
                  SEAT
                </span>

                <span className="text-sm font-extrabold text-black">
                  {activeTicket.seat}
                </span>
              </div>

            </div>
          )}

          {/* TICKET NUMBER */}
          {activeTicket && (
            <div className="text-center border-t border-gray-100 pt-3">
              <p className="text-[9px] text-gray-400 font-bold uppercase">
                Ticket
              </p>

              <p className="text-xs font-bold text-gray-700">
                #{activeTicket.id}
              </p>
            </div>
          )}

        </div>

        {/* CAROUSEL DOTS */}
        {seats.length > 1 && (
          <div className="flex gap-2 mt-5">

            {seats.map((ticket, index) => (
              <button
                key={ticket.id}
                onClick={() => setActiveTicketIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeTicketIndex === index
                    ? 'w-6 bg-[#026CD1]'
                    : 'w-2 bg-gray-600'
                }`}
              />
            ))}

          </div>
        )}

        {/* TICKET COUNTER */}
        {seats.length > 1 && (
          <p className="text-xs text-gray-400 mt-3 font-medium">
            Ticket {activeTicketIndex + 1} of {seats.length}
          </p>
        )}

        <p className="text-xs text-gray-400 mt-3 font-medium">
          Hold near reader to enter event
        </p>

      </div>

      <style>{`
        @keyframes scanLine {
          0% {
            left: 5%;
          }

          100% {
            left: 91%;
          }
        }
      `}</style>

    </div>
  );
}


/* =========================================================
   MAIN APP
   ========================================================= */

export default function TicketMasterApp() {

  /* ---------------- STATE ---------------- */

  const [currentScreen, setCurrentScreen] = useState('login');

  const [activeTab, setActiveTab] = useState('My Tickets');

  const [loginEmail, setLoginEmail] = useState('user@example.com');

  const [loginPassword, setLoginPassword] = useState('password');

  const [showTransferSuccess, setShowTransferSuccess] = useState(false);

  const [eventData, setEventData] = useState<EventData>({
    title: 'BTS WORLD TOUR ARIRANG - BOGOTÁ',

    dateTime: 'FRI • OCT 2, 2026 • 7:00 PM',

    venue: 'Estadio El Campín, Bogotá',

    coverImage:
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80',

    orderNumber: 'Order #TM-SEED-BTS-CO',

    tickets: [
      {
        id: 1,
        type: 'Standard Ticket',
        section: 'Occidental Baja',
        row: '12',
        seat: '5',
        selected: true,
        transferred: false,
      },

      {
        id: 2,
        type: 'Standard Ticket',
        section: 'Occidental Baja',
        row: '12',
        seat: '6',
        selected: true,
        transferred: false,
      },

      {
        id: 3,
        type: 'Standard Ticket',
        section: 'Occidental Baja',
        row: '12',
        seat: '7',
        selected: false,
        transferred: false,
      },
    ],
  });

  const [verifyCode, setVerifyCode] = useState([
    '4',
    '8',
    '1',
    '9',
    '2',
    '0',
  ]);

  const [recipient, setRecipient] = useState<Recipient>({
    firstName: 'Sofia',
    lastName: 'Martinez',
    email: 'sofia.martinez@example.com',
    note: 'Enjoy the concert! See you at the venue.',
  });

  /* ---------------- HELPERS ---------------- */

  const handleLogin = () => {
    setCurrentScreen('events');
    setActiveTab('My Tickets');
  };

  const handleTicketSelect = (id: number) => {
    setEventData((prev) => ({
      ...prev,
      tickets: prev.tickets.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              selected: !ticket.selected,
            }
          : ticket
      ),
    }));
  };

  const selectedTickets = eventData.tickets.filter(
    (ticket) => ticket.selected && !ticket.transferred
  );

  const availableTickets = eventData.tickets.filter(
    (ticket) => !ticket.transferred
  );

  const handleAddTicket = () => {
    const nextId =
      eventData.tickets.length > 0
        ? Math.max(...eventData.tickets.map((t) => t.id)) + 1
        : 1;

    setEventData((prev) => ({
      ...prev,

      tickets: [
        ...prev.tickets,

        {
          id: nextId,
          type: 'Standard Ticket',
          section: 'Occidental Baja',
          row: '12',
          seat: String(nextId + 4),
          selected: false,
          transferred: false,
        },
      ],
    }));
  };

  const handleDeleteTicket = (id: number) => {
    setEventData((prev) => ({
      ...prev,
      tickets: prev.tickets.filter((ticket) => ticket.id !== id),
    }));
  };

  const handleCompleteTransfer = () => {
    const selectedTicketIds = eventData.tickets
      .filter((ticket) => ticket.selected && !ticket.transferred)
      .map((ticket) => ticket.id);

    if (selectedTicketIds.length === 0) {
      return;
    }

    setEventData((prev) => ({
      ...prev,

      tickets: prev.tickets.map((ticket) =>
        selectedTicketIds.includes(ticket.id)
          ? {
              ...ticket,
              transferred: true,
              selected: false,
            }
          : ticket
      ),
    }));

    setShowTransferSuccess(true);
  };

  const handleSuccessOk = () => {
    setShowTransferSuccess(false);
    setActiveTab('My Tickets');
    setCurrentScreen('events');
  };

  const handleCodeChange = (index: number, value: string) => {
    const cleanValue = value.replace(/\D/g, '').slice(0, 1);

    setVerifyCode((prev) => {
      const updated = [...prev];
      updated[index] = cleanValue;
      return updated;
    });
  };


  /* =========================================================
     LOGIN
     ========================================================= */

  if (currentScreen === 'login') {
    return (
      <div className="min-h-screen bg-[#F6F7F9] flex items-center justify-center px-5">

        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">

          <div className="text-center mb-8">

            <div className="w-14 h-14 bg-[#026CDF] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Ticket className="text-white" size={30} />
            </div>

            <h1 className="text-2xl font-extrabold text-gray-900">
              ticketmaster
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Sign in to manage your tickets
            </p>

          </div>

          <div className="space-y-4">

            <div>
              <label className="text-xs font-bold text-gray-600">
                EMAIL
              </label>

              <input
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none focus:border-[#026CDF]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600">
                PASSWORD
              </label>

              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none focus:border-[#026CDF]"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-[#026CDF] text-white font-bold py-3.5 rounded-lg mt-2"
            >
              SIGN IN
            </button>

          </div>

        </div>
      </div>
    );
  }


  /* =========================================================
     MOBILE TICKET SCREEN
     ========================================================= */

  if (currentScreen === 'barcode') {
    return (
      <MobileTicketsModal
        eventData={eventData}
        seats={availableTickets}
        onClose={() => setCurrentScreen('details')}
      />
    );
  }


  /* =========================================================
     MAIN APPLICATION
     ========================================================= */

  return (
    <div className="min-h-screen bg-[#F6F7F9] text-gray-900">

      {/* =====================================================
          EVENTS SCREEN
      ===================================================== */}

      {currentScreen === 'events' && activeTab === 'My Tickets' && (
        <div className="min-h-screen pb-24">

          {/* HEADER */}

          <div className="bg-white border-b border-gray-200 px-5 pt-5 pb-4">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">
                  My Tickets
                </p>

                <h1 className="text-xl font-extrabold">
                  Upcoming Events
                </h1>
              </div>

              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <User size={20} />
              </button>

            </div>

          </div>


          {/* EVENT CARD */}

          <div className="p-4">

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">

              <img
                src={eventData.coverImage}
                alt={eventData.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-4">

                <p className="text-xs text-[#026CDF] font-bold uppercase">
                  {eventData.dateTime}
                </p>

                <h2 className="font-extrabold text-lg mt-1">
                  {eventData.title}
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  {eventData.venue}
                </p>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-xs font-bold text-gray-500">
                    {availableTickets.length} ticket
                    {availableTickets.length !== 1 ? 's' : ''}
                  </span>

                  <button
                    onClick={() => setCurrentScreen('details')}
                    className="bg-[#026CDF] text-white text-xs font-bold px-4 py-2.5 rounded-lg"
                  >
                    VIEW DETAILS
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* =====================================================
          EVENT DETAILS
      ===================================================== */}

      {currentScreen === 'details' && activeTab === 'My Tickets' && (
        <div className="bg-[#F6F7F9] min-h-screen pb-24">

          <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center">

            <button
              onClick={() => setCurrentScreen('events')}
              className="mr-3"
            >
              <ArrowLeft size={22} />
            </button>

            <h1 className="font-extrabold">
              Event Details
            </h1>

          </div>


          <div className="p-4">

            <div className="bg-white rounded-xl overflow-hidden border border-gray-200">

              <img
                src={eventData.coverImage}
                alt={eventData.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">

                <h2 className="text-lg font-extrabold">
                  {eventData.title}
                </h2>

                <p className="text-xs text-gray-500 mt-2">
                  {eventData.dateTime}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {eventData.venue}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  {eventData.orderNumber}
                </p>

              </div>

            </div>


            {/* TICKETS */}

            <div className="flex justify-between items-center mt-5 mb-3">

              <span className="text-xs font-bold text-blue-400 uppercase">
                Individual Tickets ({availableTickets.length})
              </span>

              <button
                onClick={handleAddTicket}
                className="flex items-center gap-1 bg-[#026CDF] hover:bg-blue-700 text-xs text-white font-bold px-3 py-1.5 rounded"
              >
                <Plus size={14} />
                ADD
              </button>

            </div>


            <div className="space-y-3">

              {eventData.tickets.map((ticket) => (

                <div
                  key={ticket.id}
                  className={`bg-white rounded-lg p-3.5 border shadow-xs ${
                    ticket.transferred
                      ? 'border-gray-200 opacity-50'
                      : 'border-[#E5E7EB]'
                  }`}
                >

                  <div className="flex justify-between items-start">

                    <div>

                      <span className="font-bold text-xs text-gray-900 block">
                        {ticket.type}
                      </span>

                      <span className="text-[10px] text-gray-400 font-semibold">
                        {ticket.transferred
                          ? 'Transferred'
                          : 'Mobile Ticket'}
                      </span>

                    </div>

                    <button
                      onClick={() => handleDeleteTicket(ticket.id)}
                      className="text-gray-400"
                    >
                      <Trash2 size={15} />
                    </button>

                  </div>


                  <div className="grid grid-cols-3 gap-2 mt-3 text-center">

                    <div>
                      <span className="block text-[9px] text-gray-400 font-bold">
                        SECTION
                      </span>

                      <span className="text-xs font-bold">
                        {ticket.section}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[9px] text-gray-400 font-bold">
                        ROW
                      </span>

                      <span className="text-xs font-bold">
                        {ticket.row}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[9px] text-gray-400 font-bold">
                        SEAT
                      </span>

                      <span className="text-xs font-bold">
                        {ticket.seat}
                      </span>
                    </div>

                  </div>

                </div>

              ))}

            </div>
                        {/* VIEW TICKETS */}

            {availableTickets.length > 0 && (
              <button
                onClick={() => setCurrentScreen('barcode')}
                className="w-full bg-[#026CDF] text-white font-bold py-3.5 rounded-lg mt-5 flex items-center justify-center gap-2"
              >
                <QrCode size={18} />
                VIEW TICKETS
              </button>
            )}

            {/* TRANSFER */}

            {availableTickets.length > 0 && (
              <button
                onClick={() => setCurrentScreen('select_tickets')}
                className="w-full bg-white border border-[#026CDF] text-[#026CDF] font-bold py-3.5 rounded-lg mt-3 flex items-center justify-center gap-2"
              >
                <UserPlus size={18} />
                TRANSFER TICKETS
              </button>
            )}

          </div>

        </div>
      )}


      {/* =====================================================
          SELECT TICKETS
          ===================================================== */}

      {currentScreen === 'select_tickets' && (
        <div className="min-h-screen bg-[#F6F7F9] pb-24">

          <div className="bg-white px-4 py-3 border-b flex items-center">

            <button
              onClick={() => setCurrentScreen('details')}
              className="mr-3"
            >
              <ArrowLeft size={22} />
            </button>

            <h1 className="font-extrabold">
              Select Tickets
            </h1>

          </div>

          <div className="p-4">

            <p className="text-xs text-gray-500 mb-4">
              Select the tickets you want to transfer.
            </p>

            <div className="space-y-3">

              {eventData.tickets
                .filter((ticket) => !ticket.transferred)
                .map((ticket) => (

                  <div
                    key={ticket.id}
                    className="bg-white rounded-xl border border-gray-200 p-4"
                  >

                    <div className="flex items-start gap-3">

                      <input
                        type="checkbox"
                        checked={ticket.selected}
                        onChange={() => handleTicketSelect(ticket.id)}
                        className="mt-1 w-5 h-5 accent-[#026CDF]"
                      />

                      <div className="flex-1">

                        <p className="text-sm font-extrabold">
                          {ticket.type}
                        </p>

                        <div className="grid grid-cols-3 mt-3 text-center">

                          <div>
                            <span className="block text-[9px] text-gray-400 font-bold">
                              SECTION
                            </span>

                            <span className="text-xs font-bold">
                              {ticket.section}
                            </span>
                          </div>

                          <div>
                            <span className="block text-[9px] text-gray-400 font-bold">
                              ROW
                            </span>

                            <span className="text-xs font-bold">
                              {ticket.row}
                            </span>
                          </div>

                          <div>
                            <span className="block text-[9px] text-gray-400 font-bold">
                              SEAT
                            </span>

                            <span className="text-xs font-bold">
                              {ticket.seat}
                            </span>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

            </div>

            <button
              disabled={selectedTickets.length === 0}
              onClick={() => setCurrentScreen('security')}
              className={`w-full py-3.5 rounded-lg mt-5 font-bold ${
                selectedTickets.length > 0
                  ? 'bg-[#026CDF] text-white'
                  : 'bg-gray-300 text-gray-500'
              }`}
            >
              CONTINUE
            </button>

          </div>

        </div>
      )}


      {/* =====================================================
          SECURITY VERIFICATION
          ===================================================== */}

      {currentScreen === 'security' && (
        <div className="min-h-screen bg-[#F6F7F9]">

          <div className="bg-white px-4 py-3 border-b flex items-center">

            <button
              onClick={() => setCurrentScreen('select_tickets')}
              className="mr-3"
            >
              <ArrowLeft size={22} />
            </button>

            <h1 className="font-extrabold">
              Security Verification
            </h1>

          </div>

          <div className="p-5">

            <div className="bg-white rounded-xl p-5 border border-gray-200">

              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                <Lock className="text-[#026CDF]" size={23} />
              </div>

              <h2 className="text-center font-extrabold text-lg mt-4">
                Verify Transfer
              </h2>

              <p className="text-center text-xs text-gray-500 mt-2">
                Enter the 6-digit verification code to continue.
              </p>

              <div className="flex justify-center gap-2 mt-6">

                {verifyCode.map((digit, index) => (

                  <input
                    key={index}
                    value={digit}
                    maxLength={1}
                    inputMode="numeric"
                    onChange={(e) =>
                      handleCodeChange(index, e.target.value)
                    }
                    className="w-11 h-12 text-center text-lg font-bold border border-gray-200 rounded-lg outline-none focus:border-[#026CDF]"
                  />

                ))}

              </div>

              <button
                onClick={() => setCurrentScreen('transfer_recipient')}
                className="w-full py-3.5 bg-[#026CDF] text-white font-bold rounded-lg mt-6"
              >
                CONTINUE
              </button>

            </div>

          </div>

        </div>
      )}


      {/* =====================================================
          RECIPIENT INFORMATION
          ===================================================== */}

      {currentScreen === 'transfer_recipient' && (
        <div className="min-h-screen bg-[#F6F7F9]">

          <div className="bg-white px-4 py-3 border-b flex items-center">

            <button
              onClick={() => setCurrentScreen('security')}
              className="mr-3"
            >
              <ArrowLeft size={22} />
            </button>

            <h1 className="font-extrabold">
              Recipient Information
            </h1>

          </div>

          <div className="p-4">

            <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-4">

              <div>
                <label className="text-xs font-bold text-gray-600">
                  FIRST NAME
                </label>

                <input
                  value={recipient.firstName}
                  onChange={(e) =>
                    setRecipient({
                      ...recipient,
                      firstName: e.target.value,
                    })
                  }
                  className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-3 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600">
                  LAST NAME
                </label>

                <input
                  value={recipient.lastName}
                  onChange={(e) =>
                    setRecipient({
                      ...recipient,
                      lastName: e.target.value,
                    })
                  }
                  className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-3 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600">
                  EMAIL
                </label>

                <input
                  type="email"
                  value={recipient.email}
                  onChange={(e) =>
                    setRecipient({
                      ...recipient,
                      email: e.target.value,
                    })
                  }
                  className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-3 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600">
                  NOTE
                </label>

                <textarea
                  value={recipient.note}
                  onChange={(e) =>
                    setRecipient({
                      ...recipient,
                      note: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-3 text-sm resize-none"
                />
              </div>

              <div className="bg-blue-50 rounded-lg p-3">

                <p className="text-xs text-blue-700 font-semibold">
                  {selectedTickets.length} ticket
                  {selectedTickets.length !== 1 ? 's' : ''} selected
                  for transfer.
                </p>

              </div>

              <button
                onClick={handleCompleteTransfer}
                className="w-full py-3.5 bg-[#026CDF] hover:bg-blue-700 text-white font-bold rounded-lg text-sm mt-2 shadow-sm"
              >
                CONTINUE
              </button>

            </div>

          </div>

        </div>
      )}


      {/* =====================================================
          ADMIN MANAGER
          ===================================================== */}

      {currentScreen === 'admin' && (
        <div className="min-h-screen bg-[#F6F7F9] pb-24">

          <div className="bg-white px-4 py-3 border-b flex items-center">

            <button
              onClick={() => setCurrentScreen('events')}
              className="mr-3"
            >
              <ArrowLeft size={22} />
            </button>

            <h1 className="font-extrabold">
              Admin Manager
            </h1>

          </div>

          <div className="p-4 space-y-4">

            <div className="bg-white rounded-xl border border-gray-200 p-4">

              <div className="flex items-center gap-2 mb-4">

                <SlidersHorizontal
                  size={18}
                  className="text-[#026CDF]"
                />

                <h2 className="font-extrabold">
                  Event Settings
                </h2>

              </div>

              <label className="text-xs font-bold text-gray-600">
                EVENT TITLE
              </label>

              <input
                value={eventData.title}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    title: e.target.value,
                  })
                }
                className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-3 text-sm"
              />

              <label className="text-xs font-bold text-gray-600 block mt-4">
                DATE & TIME
              </label>

              <input
                value={eventData.dateTime}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    dateTime: e.target.value,
                  })
                }
                className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-3 text-sm"
              />

              <label className="text-xs font-bold text-gray-600 block mt-4">
                VENUE
              </label>

              <input
                value={eventData.venue}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    venue: e.target.value,
                  })
                }
                className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-3 text-sm"
              />

              <label className="text-xs font-bold text-gray-600 block mt-4">
                COVER IMAGE URL
              </label>

              <input
                value={eventData.coverImage}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    coverImage: e.target.value,
                  })
                }
                className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-3 text-sm"
              />

            </div>


            {/* ADMIN TICKETS */}

            <div className="bg-white rounded-xl border border-gray-200 p-4">

              <div className="flex justify-between items-center mb-3">

                <span className="text-xs font-bold text-blue-400 uppercase">
                  Individual Tickets ({eventData.tickets.length})
                </span>

                <button
                  onClick={handleAddTicket}
                  className="flex items-center gap-1 bg-[#026CDF] text-xs text-white font-bold px-3 py-1.5 rounded"
                >
                  <Plus size={14} />
                  ADD
                </button>

              </div>

              <div className="space-y-3">

                {eventData.tickets.map((ticket) => (

                  <div
                    key={ticket.id}
                    className="border border-gray-200 rounded-lg p-3"
                  >

                    <div className="flex justify-between">

                      <span className="text-xs font-bold">
                        Ticket #{ticket.id}
                      </span>

                      <button
                        onClick={() => handleDeleteTicket(ticket.id)}
                        className="text-red-400"
                      >
                        <Trash2 size={15} />
                      </button>

                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-3">

                      <input
                        value={ticket.section}
                        onChange={(e) =>
                          setEventData((prev) => ({
                            ...prev,
                            tickets: prev.tickets.map((t) =>
                              t.id === ticket.id
                                ? {
                                    ...t,
                                    section: e.target.value,
                                  }
                                : t
                            ),
                          }))
                        }
                        placeholder="Section"
                        className="border rounded px-2 py-2 text-xs"
                      />

                      <input
                        value={ticket.row}
                        onChange={(e) =>
                          setEventData((prev) => ({
                            ...prev,
                            tickets: prev.tickets.map((t) =>
                              t.id === ticket.id
                                ? {
                                    ...t,
                                    row: e.target.value,
                                  }
                                : t
                            ),
                          }))
                        }
                        placeholder="Row"
                        className="border rounded px-2 py-2 text-xs"
                      />

                      <input
                        value={ticket.seat}
                        onChange={(e) =>
                          setEventData((prev) => ({
                            ...prev,
                            tickets: prev.tickets.map((t) =>
                              t.id === ticket.id
                                ? {
                                    ...t,
                                    seat: e.target.value,
                                  }
                                : t
                            ),
                          }))
                        }
                        placeholder="Seat"
                        className="border rounded px-2 py-2 text-xs"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      )}
            {/* =====================================================
          BOTTOM NAVIGATION
          ===================================================== */}

      {currentScreen !== 'barcode' &&
        currentScreen !== 'login' &&
        currentScreen !== 'security' &&
        currentScreen !== 'transfer_recipient' &&
        currentScreen !== 'select_tickets' && (

          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around z-40">

            <button
              onClick={() => {
                setActiveTab('My Tickets');
                setCurrentScreen('events');
              }}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'My Tickets'
                  ? 'text-[#026CDF]'
                  : 'text-gray-400'
              }`}
            >
              <Ticket size={20} />

              <span className="text-[10px] font-bold">
                Tickets
              </span>
            </button>


            <button
              onClick={() => {
                setActiveTab('Explore');
                setCurrentScreen('events');
              }}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'Explore'
                  ? 'text-[#026CDF]'
                  : 'text-gray-400'
              }`}
            >
              <Compass size={20} />

              <span className="text-[10px] font-bold">
                Explore
              </span>
            </button>


            <button
              onClick={() => {
                setActiveTab('Favorites');
                setCurrentScreen('events');
              }}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'Favorites'
                  ? 'text-[#026CDF]'
                  : 'text-gray-400'
              }`}
            >
              <Heart size={20} />

              <span className="text-[10px] font-bold">
                Favorites
              </span>
            </button>


            <button
              onClick={() => {
                setActiveTab('Payments');
                setCurrentScreen('events');
              }}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'Payments'
                  ? 'text-[#026CDF]'
                  : 'text-gray-400'
              }`}
            >
              <DollarSign size={20} />

              <span className="text-[10px] font-bold">
                Payments
              </span>
            </button>


            <button
              onClick={() => {
                setActiveTab('Profile');
                setCurrentScreen('admin');
              }}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'Profile'
                  ? 'text-[#026CDF]'
                  : 'text-gray-400'
              }`}
            >
              <User size={20} />

              <span className="text-[10px] font-bold">
                Profile
              </span>
            </button>

          </div>
        )}


      {/* =====================================================
          TRANSFER SUCCESS MODAL
          ===================================================== */}

      {showTransferSuccess && (

        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-5">

          <div
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl px-6 pt-7 pb-6 text-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="transfer-success-title"
          >

            <div className="flex justify-center mb-5">

              <div className="w-[74px] h-[74px] rounded-full border-[3px] border-[#026CDF] flex items-center justify-center">

                <Check
                  size={38}
                  strokeWidth={3}
                  className="text-[#026CDF]"
                />

              </div>

            </div>


            <h2
              id="transfer-success-title"
              className="text-2xl font-extrabold text-gray-900 mb-2"
            >
              Successful!
            </h2>


            <p className="text-sm text-gray-500 leading-relaxed mb-7">
              Ticket Transfer was successful.
            </p>


            <button
              type="button"
              onClick={handleSuccessOk}
              className="w-full py-3.5 bg-[#026CDF] hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-lg text-sm transition-colors shadow-sm"
            >
              OK
            </button>

          </div>

        </div>

      )}

    </div>
  );
}



      
