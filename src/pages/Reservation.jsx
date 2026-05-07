import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/sections/Footer';

const Reservation = () => {
  const containerRef = useRef(null);
  
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    seating: 'main_dining',
    experience: 'a_la_carte',
    preOrders: {},
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const timeSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
  
  const seatingOptions = [
    { id: 'main_dining', label: 'Main Dining Room', desc: 'The vibrant heart of Obsidian.' },
    { id: 'chefs_counter', label: "Chef's Counter", desc: 'An immersive culinary performance.' },
    { id: 'private_booth', label: 'Private Booth', desc: 'Intimate seating with curtains.' }
  ];

  const experienceOptions = [
    { id: 'a_la_carte', label: 'À La Carte', price: 'Varies', desc: 'Select from our seasonal menu upon arrival.' },
    { id: 'tasting_menu', label: 'The Signature Tasting', price: '$250/pp', desc: 'A curated 9-course journey through our finest creations.' },
    { id: 'wine_pairing', label: 'Tasting + Wine Pairing', price: '$395/pp', desc: 'The tasting menu perfectly paired with sommelier selections.' }
  ];

  const menuItems = [
    { id: 'm1', name: 'Truffle Caviar Pasta', price: 120, image: 'https://res.cloudinary.com/dicb5gkab/image/upload/v1778055106/ChatGPT_Image_May_5_2026_09_50_18_PM-Photoroom_og2hx2.png' },
    { id: 'm2', name: 'Wagyu Tomahawk', price: 210, image: 'https://res.cloudinary.com/dicb5gkab/image/upload/v1778055101/ChatGPT_Image_May_6_2026_01_25_36_PM_1_-Photoroom_cfnjii.png' },
    { id: 'm3', name: 'Gold Leaf Lobster', price: 185, image: 'https://res.cloudinary.com/dicb5gkab/image/upload/v1778055101/ChatGPT_Image_May_6_2026_01_25_36_PM_4_-Photoroom_wy0w0p.png' },
    { id: 'm4', name: 'Black Cod Miso', price: 145, image: 'https://res.cloudinary.com/dicb5gkab/image/upload/v1778055106/ChatGPT_Image_May_5_2026_09_50_18_PM-Photoroom_og2hx2.png' },
    { id: 'm5', name: "Duck Breast à l'Orange", price: 150, image: 'https://res.cloudinary.com/dicb5gkab/image/upload/v1778055101/ChatGPT_Image_May_6_2026_01_25_36_PM_1_-Photoroom_cfnjii.png' },
    { id: 'm6', name: 'Chocolate Gold Lava Cake', price: 65, image: 'https://res.cloudinary.com/dicb5gkab/image/upload/v1778055101/ChatGPT_Image_May_6_2026_01_25_36_PM_4_-Photoroom_wy0w0p.png' },
  ];



  useEffect(() => {
    // Initialize date to today
    if (!formData.date) {
      const today = new Date();
      // Format correctly for local timezone avoiding UTC shift
      const offset = today.getTimezoneOffset();
      const localDate = new Date(today.getTime() - (offset*60*1000));
      updateForm('date', localDate.toISOString().split('T')[0]);
    }
  }, []);

  // Calendar Helpers
  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    const today = new Date();
    today.setHours(0,0,0,0);

    // Empty slots for previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 md:h-16"></div>);
    }
    
    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isPast = date < today;
      const offset = date.getTimezoneOffset();
      const localDate = new Date(date.getTime() - (offset*60*1000));
      const dateString = localDate.toISOString().split('T')[0];
      const isSelected = formData.date === dateString;
      
      days.push(
        <button
          key={i}
          disabled={isPast}
          onClick={() => updateForm('date', dateString)}
          className={`h-12 md:h-16 flex items-center justify-center font-serif text-lg md:text-xl transition-all duration-300 ${
            isPast ? 'text-white/10 cursor-not-allowed' : 
            isSelected ? 'border border-gold-500 bg-gold-500/10 text-gold-400 scale-[1.15] z-10 shadow-[0_0_20px_rgba(212,175,55,0.15)]' : 
            'border border-transparent hover:border-white/10 hover:bg-white/[0.02] text-white/60 hover:text-white'
          }`}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const prevMonth = () => {
    const today = new Date();
    if (currentMonth.getFullYear() > today.getFullYear() || (currentMonth.getFullYear() === today.getFullYear() && currentMonth.getMonth() > today.getMonth())) {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    }
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate backend request
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(5); // Success step
    }, 2000);
  };

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updatePreOrder = (id, change) => {
    setFormData(prev => {
      const currentQty = prev.preOrders[id] || 0;
      const newQty = Math.max(0, currentQty + change);
      const newOrders = { ...prev.preOrders };
      if (newQty === 0) {
        delete newOrders[id];
      } else {
        newOrders[id] = newQty;
      }
      return { ...prev, preOrders: newOrders };
    });
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-hidden relative" ref={containerRef}>
      
      {/* Background ambient elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-900/5 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-500/5 blur-[200px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 pt-32 pb-24 relative z-10 min-h-screen flex flex-col justify-center">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-gold-500 tracking-[0.4em] text-[10px] md:text-xs uppercase font-sans mb-4">
            Obsidian Reservations
          </p>
          <h1 className="font-serif text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-4">
            Secure Your <span className="italic font-light text-gold-500 pr-2">Table</span>
          </h1>
          <p className="text-white/40 font-sans text-sm max-w-lg mx-auto tracking-widest font-light">
            {step < 5 ? `Step 0${step} of 04` : 'Reservation Confirmed'}
          </p>
        </div>

        {/* Progress Bar */}
        {step < 5 && (
          <div className="w-full max-w-3xl mx-auto h-px bg-white/10 mb-16 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-gold-500 transition-all duration-500 ease-in-out"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        )}

        <div className={`mx-auto w-full transition-all duration-500 ${step === 3 ? 'max-w-5xl' : 'max-w-3xl'}`}>
            
            {/* ── STEP 1: DATE, TIME & GUESTS ────────────────────────────── */}
            {step === 1 && (
              <div 
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
              >
                {/* LEFT: Custom Inline Calendar */}
                <div className="lg:col-span-7 space-y-6">
                  <label className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans block mb-6">Select Date</label>
                  <div className="bg-[#0a0a0a] border border-white/5 p-6 md:p-8 relative overflow-hidden">
                    {/* Ambient Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gold-500/5 blur-[50px] pointer-events-none" />
                    
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6 relative z-10">
                      <button onClick={prevMonth} className="p-2 text-white/30 hover:text-gold-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <h3 className="text-xl md:text-2xl font-serif tracking-[0.1em] uppercase text-white">
                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </h3>
                      <button onClick={nextMonth} className="p-2 text-white/30 hover:text-gold-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                    
                    {/* Calendar Grid */}
                    <div className="relative z-10">
                      <div className="grid grid-cols-7 mb-4">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                          <div key={day} className="text-center text-[9px] uppercase tracking-[0.3em] text-white/30">
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-y-2">
                        {renderCalendar()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Guests & Time */}
                <div className="lg:col-span-5 space-y-12">
                  
                  {/* Guests Selector */}
                  <div className="space-y-6">
                    <label className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans block">Number of Guests</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <button
                          key={num}
                          onClick={() => updateForm('guests', num.toString())}
                          className={`h-14 flex items-center justify-center border font-serif text-xl transition-all duration-300 ${
                            formData.guests === num.toString() 
                              ? 'border-gold-500 bg-gold-500/10 text-gold-400 scale-[1.05]' 
                              : 'border-white/10 hover:border-white/40 text-white/60 hover:bg-white/[0.02]'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                      <button 
                        onClick={() => updateForm('guests', '7+')}
                        className={`col-span-3 sm:col-span-2 h-14 flex items-center justify-center border font-sans text-[9px] tracking-[0.2em] uppercase transition-all duration-300 ${
                          formData.guests === '7+' 
                            ? 'border-gold-500 bg-gold-500/10 text-gold-400 scale-[1.05]' 
                            : 'border-white/10 hover:border-white/40 text-white/60 hover:bg-white/[0.02]'
                        }`}
                      >
                        Larger Party
                      </button>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-6">
                    <label className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans block">Select Time</label>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => updateForm('time', time)}
                          className={`py-3 border text-xs font-sans tracking-[0.15em] transition-all duration-300 ${
                            formData.time === time 
                              ? 'border-gold-500 bg-gold-500/10 text-gold-400 scale-[1.05]' 
                              : 'border-white/10 hover:border-white/40 text-white/60 hover:bg-white/[0.02]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* ── STEP 2: SEATING & EXPERIENCE ───────────────────────────── */}
            {step === 2 && (
              <div 
                className="space-y-12"
              >
                {/* Seating Preference */}
                <div className="space-y-6">
                  <label className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans block mb-6">Seating Preference</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {seatingOptions.map(option => (
                      <div 
                        key={option.id}
                        onClick={() => updateForm('seating', option.id)}
                        className={`p-6 border cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[140px] ${
                          formData.seating === option.id 
                            ? 'border-gold-500 bg-gold-500/5' 
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <h4 className={`font-serif text-lg mb-2 ${formData.seating === option.id ? 'text-gold-400' : 'text-white'}`}>
                          {option.label}
                        </h4>
                        <p className="text-white/40 text-xs leading-relaxed">{option.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience Selection */}
                <div className="space-y-6">
                  <label className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans block mb-6">Dining Experience</label>
                  <div className="space-y-4">
                    {experienceOptions.map(exp => (
                      <div 
                        key={exp.id}
                        onClick={() => updateForm('experience', exp.id)}
                        className={`p-6 border cursor-pointer transition-all duration-500 flex items-center justify-between group ${
                          formData.experience === exp.id 
                            ? 'border-gold-500 bg-gold-500/5' 
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div>
                          <h4 className={`font-serif text-xl mb-1 ${formData.experience === exp.id ? 'text-gold-400' : 'text-white'}`}>
                            {exp.label}
                          </h4>
                          <p className="text-white/40 text-sm">{exp.desc}</p>
                        </div>
                        <div className="text-right pl-4">
                          <span className="font-serif text-white/70">{exp.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 3: PRE-ORDER DISHES ───────────────────────────── */}
            {step === 3 && (
              <div 
                className="space-y-8"
              >
                <div className="mb-12 text-center">
                  <label className="text-white/70 text-xs tracking-[0.2em] uppercase font-sans block mb-3">Curate Your Menu</label>
                  <p className="text-white/50 text-sm font-light">Pre-order signature dishes to ensure availability for your table. (Optional)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {menuItems.map(item => {
                    const qty = formData.preOrders[item.id] || 0;
                    return (
                      <div key={item.id} className={`group p-5 lg:p-6 border transition-all duration-500 flex items-center justify-between min-h-[120px] lg:min-h-[140px] bg-[#0a0a0a] ${qty > 0 ? 'border-gold-500' : 'border-gold-500/20 hover:border-gold-500/50'}`}>
                        
                        <div className="flex items-center gap-5 w-full">
                          {/* Small Elegant Image with zoom out animation */}
                          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#050505] border border-gold-500/10 flex items-center justify-center p-2 flex-shrink-0 shadow-inner overflow-hidden">
                             <img src={item.image} alt={item.name} className={`w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-out ${qty > 0 ? 'scale-95' : 'scale-[1.15] group-hover:scale-95'}`} />
                          </div>
                          
                          {/* Text Content */}
                          <div className="flex-1 min-w-0 pr-2">
                            <h4 className={`font-serif text-lg lg:text-xl mb-1 leading-tight ${qty > 0 ? 'text-gold-400' : 'text-white'}`}>{item.name}</h4>
                            <p className="text-white/60 text-sm lg:text-base font-serif">${item.price}</p>
                          </div>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between gap-3 bg-black/60 rounded-full border border-white/20 px-3 py-1.5 flex-shrink-0">
                          <button onClick={() => updatePreOrder(item.id, -1)} className="text-white/60 hover:text-gold-400 p-1 w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center text-3xl font-light leading-none transition-colors">-</button>
                          <span className="font-serif text-white text-lg lg:text-xl min-w-[2ch] text-center">{qty}</span>
                          <button onClick={() => updatePreOrder(item.id, 1)} className="text-white/60 hover:text-gold-400 p-1 w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center text-3xl font-light leading-none transition-colors">+</button>
                        </div>
                        
                      </div>
                    );
                  })}
                </div>
                
                {/* Order Summary */}
                {Object.keys(formData.preOrders).length > 0 && (
                  <div className="mt-16 pt-8 border-t border-white/10 flex items-end justify-between">
                    <div className="space-y-2">
                       <span className="text-white/70 text-[10px] tracking-[0.4em] uppercase font-sans block">Estimated Subtotal</span>
                       <span className="text-white/50 text-xs font-serif italic">Exclusive of taxes & gratuity</span>
                    </div>
                    <span className="font-serif text-4xl md:text-5xl text-white">
                      ${Object.entries(formData.preOrders).reduce((total, [id, qty]) => {
                        const item = menuItems.find(m => m.id === id);
                        return total + (item.price * qty);
                      }, 0)}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* ── STEP 4: CONTACT DETAILS ────────────────────────────────── */}
            {step === 4 && (
              <div 
                className="space-y-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans block">First Name</label>
                    <input type="text" value={formData.firstName} onChange={(e) => updateForm('firstName', e.target.value)} className="w-full bg-transparent border-b border-white/20 pb-3 text-lg font-serif text-white focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans block">Last Name</label>
                    <input type="text" value={formData.lastName} onChange={(e) => updateForm('lastName', e.target.value)} className="w-full bg-transparent border-b border-white/20 pb-3 text-lg font-serif text-white focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans block">Email Address</label>
                    <input type="email" value={formData.email} onChange={(e) => updateForm('email', e.target.value)} className="w-full bg-transparent border-b border-white/20 pb-3 text-lg font-serif text-white focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans block">Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => updateForm('phone', e.target.value)} className="w-full bg-transparent border-b border-white/20 pb-3 text-lg font-serif text-white focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans block">Special Requests / Allergies</label>
                  <textarea 
                    value={formData.specialRequests} 
                    onChange={(e) => updateForm('specialRequests', e.target.value)} 
                    rows="3"
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-lg font-serif text-white focus:outline-none focus:border-gold-500 transition-colors resize-none mt-2" 
                    placeholder="Let us know of any dietary restrictions..."
                  />
                </div>
              </div>
            )}

            {/* ── STEP 5: SUCCESS ────────────────────────────────────────── */}
            {step === 5 && (
              <div 
                className="text-center py-20"
              >
                <div className="w-24 h-24 rounded-full border border-gold-500/50 flex items-center justify-center mx-auto mb-10 bg-gold-500/10">
                  <svg className="w-10 h-10 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-4xl text-white mb-6">We look forward to hosting you.</h3>
                <p className="text-white/40 font-sans tracking-wide leading-relaxed max-w-md mx-auto mb-12">
                  Your reservation request has been received. A formal confirmation will be sent to your email shortly.
                </p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="px-10 py-4 border border-white/20 text-xs uppercase tracking-[0.3em] hover:border-gold-500 transition-colors"
                >
                  Return to Home
                </button>
              </div>
            )}

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="flex justify-between items-center mt-16 pt-10 border-t border-white/10">
              <button 
                onClick={handlePrev}
                className={`text-xs uppercase tracking-[0.3em] font-sans transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-white/50 hover:text-white'}`}
              >
                Go Back
              </button>

              {step < 4 ? (
                <button 
                  onClick={handleNext}
                  disabled={step === 1 && (!formData.date || !formData.time)}
                  className="px-10 py-4 border border-gold-500/40 text-gold-500 text-xs uppercase tracking-[0.3em] hover:bg-gold-500/10 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  Continue
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.firstName || !formData.email}
                  className="relative px-10 py-4 bg-gold-500 text-black text-xs uppercase tracking-[0.3em] font-medium hover:bg-gold-400 transition-colors disabled:opacity-50 flex items-center justify-center min-w-[200px]"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              )}
            </div>
          )}

        </div>
      </div>
      
      {step === 5 && <Footer />}
    </div>
  );
};

export default Reservation;
