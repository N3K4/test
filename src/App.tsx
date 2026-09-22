import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
    setFormData({ name: '', phone: '', service: '', message: '' })
  }

  const services = [
    { name: 'Классический маникюр', price: '1 500 ₽', duration: '60 мин', icon: '💅' },
    { name: 'Аппаратный маникюр', price: '2 000 ₽', duration: '75 мин', icon: '✨' },
    { name: 'Маникюр + покрытие гель-лак', price: '2 800 ₽', duration: '90 мин', icon: '🎨' },
    { name: 'Дизайн ногтей', price: 'от 200 ₽', duration: '—', icon: '💎' },
    { name: 'Наращивание ногтей', price: '3 500 ₽', duration: '120 мин', icon: '🌸' },
    { name: 'Снятие покрытия', price: '500 ₽', duration: '30 мин', icon: '🧴' },
  ]

  const gallery = [
    'linear-gradient(135deg, #fce4ec, #f8bbd0)',
    'linear-gradient(135deg, #e8eaf6, #c5cae9)',
    'linear-gradient(135deg, #fce4ec, #f48fb1)',
    'linear-gradient(135deg, #f3e5f5, #ce93d8)',
    'linear-gradient(135deg, #fff3e0, #ffcc80)',
    'linear-gradient(135deg, #e0f2f1, #80cbc4)',
  ]

  const reviews = [
    { name: 'Мария К.', text: 'Анна — настоящий профессионал! Маникюр держится идеально 3 недели. Очень довольна!', rating: 5 },
    { name: 'Елена С.', text: 'Уютная студия, приятная атмосфера. Всегда ухожу с отличным настроением и красивыми ногтями.', rating: 5 },
    { name: 'Ольга Д.', text: 'Хожу к Анне уже полгода. Качество работы на высоте, всегда чисто и аккуратно.', rating: 5 },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-pink-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold text-pink-600">
            ✨ Nails by Anna
          </a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium">Услуги</a>
            <a href="#gallery" className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium">Работы</a>
            <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium">Обо мне</a>
            <a href="#reviews" className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium">Отзывы</a>
            <a href="#contact" className="bg-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors shadow-md">
              Записаться
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-100 px-4 py-4 space-y-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-pink-500 py-2">Услуги</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-pink-500 py-2">Работы</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-pink-500 py-2">Обо мне</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-pink-500 py-2">Отзывы</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block bg-pink-500 text-white px-5 py-2 rounded-full text-center font-medium">Записаться</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                🌸 Мастер маникюра в Москве
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Красивые ногти — 
                <span className="text-pink-500"> ваша визитная карточка</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Профессиональный маникюр и педикюр с заботой о здоровье ваших ногтей. 
                Более 5 лет опыта и сотни довольных клиенток.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-pink-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Записаться онлайн
                </a>
                <a href="#services" className="border-2 border-pink-300 text-pink-500 px-8 py-3 rounded-full font-medium hover:bg-pink-50 transition-all">
                  Смотреть услуги
                </a>
              </div>
              <div className="flex items-center gap-8 mt-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">5+</div>
                  <div className="text-sm text-gray-500">лет опыта</div>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">1000+</div>
                  <div className="text-sm text-gray-500">клиентов</div>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">4.9</div>
                  <div className="text-sm text-gray-500">⭐ рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-pink-200 via-pink-100 to-purple-100 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-4">💅</div>
                  <div className="text-pink-600 font-medium text-lg">Идеальный маникюр</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">Отличный результат</div>
                    <div className="text-xs text-gray-500">Каждый раз!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Услуги и цены</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Предлагаю полный спектр услуг по уходу за ногтями. Использую только качественные материалы и стерильные инструменты.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">{service.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-pink-500 font-bold text-xl">{service.price}</span>
                  <span className="text-gray-400 text-sm">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Мои работы</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Каждая работа — это маленькое произведение искусства. Посмотрите примеры моих лучших работ.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((gradient, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center cursor-pointer"
                style={{ background: gradient }}
              >
                <div className="text-5xl opacity-60">💅</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 text-pink-500 font-medium hover:text-pink-600 transition-colors">
              Больше работ в Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-7xl mb-4">👩‍🎨</div>
                  <div className="text-gray-600 font-medium">Анна</div>
                  <div className="text-gray-400 text-sm">Мастер маникюра</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-2xl px-4 py-2 shadow-lg">
                <span className="font-bold">5+ лет</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Обо мне</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Привет! Меня зовут Анна, я сертифицированный мастер маникюра с опытом работы более 5 лет. 
                Постоянно совершенствую свои навыки, посещаю мастер-классы и слежу за трендами nail-индустрии.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Моя студия — это уютное пространство, где вы можете расслабиться и получить качественный уход за ногтями. 
                Использую только сертифицированные материалы премиум-класса и строго соблюдаю все нормы стерилизации.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">✓</span>
                  <span className="text-gray-600">Сертифицированный мастер</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">✓</span>
                  <span className="text-gray-600">Стерильные инструменты</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">✓</span>
                  <span className="text-gray-600">Премиум материалы</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">✓</span>
                  <span className="text-gray-600">Гарантия качества</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Отзывы клиентов</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Что говорят мои клиентки о работе со мной</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-pink-50 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 font-bold">
                    {review.name[0]}
                  </div>
                  <span className="font-medium text-gray-700">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Записаться на приём</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Заполните форму и я свяжусь с вами для подтверждения записи. 
                Или напишите мне напрямую в мессенджеры.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-xl">📍</div>
                  <div>
                    <div className="font-medium text-gray-800">Адрес</div>
                    <div className="text-gray-500">г. Москва, ул. Примерная, д. 10</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-xl">📞</div>
                  <div>
                    <div className="font-medium text-gray-800">Телефон</div>
                    <div className="text-gray-500">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-xl">🕐</div>
                  <div>
                    <div className="font-medium text-gray-800">Время работы</div>
                    <div className="text-gray-500">Пн-Сб: 10:00 — 20:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-xl">💬</div>
                  <div>
                    <div className="font-medium text-gray-800">Мессенджеры</div>
                    <div className="text-gray-500">WhatsApp, Telegram</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">Заявка отправлена!</h3>
                  <p className="text-green-600">Я свяжусь с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-md border border-pink-100">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent bg-white"
                        placeholder="Как вас зовут?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent bg-white"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Услуга</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent bg-white"
                      >
                        <option value="">Выберите услугу</option>
                        <option value="classic">Классический маникюр</option>
                        <option value="hardware">Аппаратный маникюр</option>
                        <option value="gel">Маникюр + гель-лак</option>
                        <option value="design">Дизайн ногтей</option>
                        <option value="extension">Наращивание ногтей</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Комментарий</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent bg-white resize-none"
                        rows={3}
                        placeholder="Удобное время, пожелания..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-pink-500 text-white py-3 rounded-xl font-medium hover:bg-pink-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Отправить заявку
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-pink-400 mb-1">✨ Nails by Anna</div>
              <p className="text-gray-400 text-sm">Мастер маникюра в Москве</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <span className="text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <span className="text-sm">TG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <span className="text-sm">WA</span>
              </a>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              © 2024 Nails by Anna. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
