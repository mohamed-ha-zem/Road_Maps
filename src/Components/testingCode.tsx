import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, isSameDay, isSameMonth } from 'date-fns';
import { CalendarDays, Trash2, Edit2, Plus } from 'lucide-react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Define types for events
interface Event {
  id: string;
  description: string;
  date: Date;
}

interface Props {}

const ItemType = 'EVENT';

const DraggableEvent: React.FC<{ event: Event; day: Date; onEdit: (event: Event, day: Date) => void; onDelete: (id: string) => void }> = ({ event, day, onEdit, onDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id: event.id, description: event.description },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [event]);

  return (
    <motion.div
      ref={drag}
      className={`text-xs p-1 mt-1 rounded truncate shadow-sm cursor-move text-gradient flex justify-between items-center ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <span>{event.description}</span>
      <div className="flex gap-1">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onEdit(event, day);
          }}
          className="text-blue-500 hover:text-blue-700"
        >
          <Edit2 size={12} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(event.id);
          }}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={12} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const DroppableDay: React.FC<{
  day: Date;
  events: Event[];
  isCurrentMonth: boolean;
  isToday: boolean;
  onDrop: (id: string, description: string, newDate: Date) => void;
  onAddEvent: (day: Date) => void;
  onEdit: (event: Event, day: Date) => void;
  onDelete: (id: string) => void;
}> = ({ day, events, isCurrentMonth, isToday, onDrop, onAddEvent, onEdit, onDelete }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item: { id: string; description: string }) => {
      onDrop(item.id, item.description, day);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [day]);

  return (
    <motion.div
      ref={drop}
      className={`p-3 h-32 rounded-lg cursor-pointer relative
        ${isCurrentMonth ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-gray-200'}
        ${isToday ? 'border-2 border-blue-500' : ''}
        ${isOver ? 'bg-blue-100' : ''}`}
      whileHover={{ scale: 1.02 }}
      onClick={(e) => {
        e.stopPropagation();
        onAddEvent(day);
      }}
    >
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium text-gray-800">{format(day, 'd')}</div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onAddEvent(day);
          }}
          className="text-blue-500 hover:text-blue-700"
        >
          <Plus size={16} />
        </motion.button>
      </div>
      <AnimatePresence>
        {events.map(event => (
          <DraggableEvent
            key={event.id}
            event={event}
            day={day}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

const Calendar: React.FC<Props> = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    console.log('Loading events from localStorage:', savedEvents);
    return savedEvents ? JSON.parse(savedEvents, (key, value) => {
      if (key === 'date') return new Date(value);
      return value;
    }) : [];
  });
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [editingDay, setEditingDay] = useState<Date | null>(null);
  const [newDescription, setNewDescription] = useState('');

  // Save events to localStorage
  useEffect(() => {
    console.log('Saving events to localStorage:', events);
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  // Generate calendar days
  const generateCalendar = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    
    const days: Date[] = [];
    let day = startDate;
    
    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }
    
    return days;
  };

  // Handle event creation or update
  const saveEvent = (day: Date) => {
    if (!newDescription || !editingDay) return;
    const newEvent: Event = {
      id: selectedEvent ? selectedEvent.id : crypto.randomUUID(),
      description: newDescription,
      date: day,
    };
    if (selectedEvent) {
      setEvents(events.map(event => (event.id === selectedEvent.id ? newEvent : event)));
    } else {
      setEvents([...events, newEvent]);
    }
    console.log('Event saved:', newEvent);
    setEditingDay(null);
    setNewDescription('');
    setSelectedEvent(null);
  };

  // Handle event deletion
  const deleteEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
    if (selectedEvent?.id === id) setSelectedEvent(null);
    console.log('Event deleted:', id);
  };

  // Handle drag and drop
  const handleDrop = (id: string, description: string, newDate: Date) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, date: newDate } : event
    ));
    console.log('Event dropped to:', newDate);
  };

  // Handle edit or add
  const handleEditOrAdd = (event: Event | null, day: Date) => {
    setSelectedEvent(event);
    setEditingDay(day);
    setNewDescription(event ? event.description : '');
  };

  // Get events for a specific day
  const getDayEvents = (day: Date) => {
    return events.filter(event => isSameDay(event.date, day));
  };

  // Navigation handlers
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  // Animation variants
  const calendarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-auto bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 mt-20">
        <style>
          {`
            .text-gradient {
              background: linear-gradient(to right, #3B82F6, #8B5CF6);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              font-weight: bold;
            }
          `}
        </style>
        {/* Calendar Grid */}
        <motion.div 
          className="flex-1 p-6 bg-white rounded-2xl shadow-xl m-6"
          variants={calendarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex justify-between items-center mb-6">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevMonth}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 flex items-center gap-2 shadow-md"
            >
              <CalendarDays size={20} />
              الشهر السابق
            </motion.button>
            <h2 className="text-2xl font-bold flex items-center gap-2 text-gradient">
              <CalendarDays size={24} />
              {format(currentDate, 'MMMM yyyy')}
            </h2>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextMonth}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 flex items-center gap-2 shadow-md"
            >
              الشهر التالي
              <CalendarDays size={20} />
            </motion.button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map(day => (
              <div key={day} className="font-semibold text-gray-700">{day}</div>
            ))}
            
            {generateCalendar().map(day => (
              <DroppableDay
                key={day.toString()}
                day={day}
                events={getDayEvents(day)}
                isCurrentMonth={isSameMonth(day, currentDate)}
                isToday={isSameDay(day, new Date())}
                onDrop={handleDrop}
                onAddEvent={() => handleEditOrAdd(null, day)}
                onEdit={handleEditOrAdd}
                onDelete={deleteEvent}
              />
            ))}
          </div>
        </motion.div>

        {/* Sidebar for Events */}
        <motion.div 
          className="w-96 p-6 bg-white rounded-2xl shadow-xl m-6 overflow-y-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gradient">
            <CalendarDays size={24} />
            الأحداث
          </h3>
          {editingDay && (
            <motion.div
              className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="الوصف"
                className="w-full p-2 text-sm border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
                rows={3}
                autoFocus
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    saveEvent(editingDay);
                  }
                }}
              />
              <div className="flex gap-2 mt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => saveEvent(editingDay)}
                  className="flex-1 p-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                >
                  حفظ
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setEditingDay(null);
                    setNewDescription('');
                    setSelectedEvent(null);
                  }}
                  className="flex-1 p-2 text-sm bg-gray-300 text-gray-800 rounded-lg"
                >
                  إلغاء
                </motion.button>
              </div>
            </motion.div>
          )}
          <AnimatePresence>
            {events.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-500"
              >
                مفيش أحداث حاليًا
              </motion.p>
            ) : (
              events.map(event => (
                <motion.div
                  key={event.id}
                  className={`p-4 mb-3 rounded-lg cursor-pointer relative
                    ${selectedEvent?.id === event.id ? 'bg-gradient-to-r from-blue-100 to-purple-100' : 'bg-gray-50'}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onClick={() => setSelectedEvent(event)}
                >
                  <p className="text-sm text-gradient">{event.description}</p>
                  <p className="text-sm text-gray-600">
                    {format(event.date, 'MMM d, yyyy')}
                  </p>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditOrAdd(event, event.date);
                      }}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit2 size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteEvent(event.id);
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </DndProvider>
  );
};

export default Calendar;