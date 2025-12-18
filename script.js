const STORAGE_KEY = 'ordersCollection';

// Конфигурируемое состояние пользователя по умолчанию
let currentUser = null;

// -------------------- ДАННЫЕ (ObjInf) --------------------

// Каждый объект: id, description (< 200), createdAt (Date), author (string, not empty),
// photoLink (optional), и дополнительные поля: clientName, address, status, deliveryDate,
// deliveryMethod, city, totalPrice.

const initialOrders = [
  {
    id: '1',
    description: 'Доставка электроники для офиса',
    createdAt: new Date('2025-12-10T10:15:00'),
    author: 'Оператор 1',
    photoLink: '',
    clientName: 'ООО "Ромашка"',
    address: 'Москва, ул. Ленина, 1, оф. 10',
    city: 'Москва',
    status: 'Новый',
    deliveryDate: new Date('2025-12-15T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 125000
  },
  {
    id: '2',
    description: 'Поставка расходных материалов',
    createdAt: new Date('2025-12-09T09:30:00'),
    author: 'Оператор 2',
    photoLink: '',
    clientName: 'ИП Иванов',
    address: 'Москва, пр-т Мира, 10',
    city: 'Москва',
    status: 'В доставке',
    deliveryDate: new Date('2025-12-16T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 32000
  },
  {
    id: '3',
    description: 'Заказ комплектующих для сервера',
    createdAt: new Date('2025-12-05T14:00:00'),
    author: 'Оператор 1',
    photoLink: '',
    clientName: 'ООО "Техно"',
    address: 'Санкт-Петербург, Невский пр., 5',
    city: 'Санкт-Петербург',
    status: 'Доставлен',
    deliveryDate: new Date('2025-12-10T00:00:00'),
    deliveryMethod: 'Транспортная компания',
    totalPrice: 210000
  },
  {
    id: '4',
    description: 'Поставка офисной мебели',
    createdAt: new Date('2025-12-01T11:20:00'),
    author: 'Оператор 3',
    photoLink: '',
    clientName: 'ООО "Комфорт"',
    address: 'Москва, ул. Тверская, 7',
    city: 'Москва',
    status: 'Подтвержден',
    deliveryDate: new Date('2025-12-20T00:00:00'),
    deliveryMethod: 'Транспортная компания',
    totalPrice: 480000
  },
  {
    id: '5',
    description: 'Доставка канцтоваров',
    createdAt: new Date('2025-12-11T08:50:00'),
    author: 'Оператор 2',
    photoLink: '',
    clientName: 'Школа №15',
    address: 'Москва, ул. Школьная, 3',
    city: 'Москва',
    status: 'Новый',
    deliveryDate: new Date('2025-12-17T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 15000
  },
  {
    id: '6',
    description: 'Поставка оборудования для склада',
    createdAt: new Date('2025-11-30T16:10:00'),
    author: 'Оператор 4',
    photoLink: '',
    clientName: 'ООО "Логистик"',
    address: 'Екатеринбург, ул. Логистическая, 12',
    city: 'Екатеринбург',
    status: 'В доставке',
    deliveryDate: new Date('2025-12-18T00:00:00'),
    deliveryMethod: 'Транспортная компания',
    totalPrice: 560000
  },
  {
    id: '7',
    description: 'Мелкий заказ товаров для дома',
    createdAt: new Date('2025-12-12T12:00:00'),
    author: 'Оператор 1',
    photoLink: '',
    clientName: 'Петров Петр',
    address: 'Москва, ул. Зеленая, 15-32',
    city: 'Москва',
    status: 'Новый',
    deliveryDate: new Date('2025-12-16T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 4500
  },
  {
    id: '8',
    description: 'Поставка строительных материалов',
    createdAt: new Date('2025-11-28T09:00:00'),
    author: 'Оператор 3',
    photoLink: '',
    clientName: 'ООО "СтройИнвест"',
    address: 'Казань, ул. Строителей, 1',
    city: 'Казань',
    status: 'Доставлен',
    deliveryDate: new Date('2025-12-05T00:00:00'),
    deliveryMethod: 'Транспортная компания',
    totalPrice: 980000
  },
  {
    id: '9',
    description: 'Заказ бытовой техники',
    createdAt: new Date('2025-12-03T18:20:00'),
    author: 'Оператор 2',
    photoLink: '',
    clientName: 'Сидорова Анна',
    address: 'СПб, ул. Парковая, 9',
    city: 'Санкт-Петербург',
    status: 'Отменен',
    deliveryDate: new Date('2025-12-08T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 38000
  },
  {
    id: '10',
    description: 'Регулярная поставка продуктов',
    createdAt: new Date('2025-12-02T10:00:00'),
    author: 'Оператор 4',
    photoLink: '',
    clientName: 'Кафе "Вкусно"',
    address: 'Москва, ул. Центральная, 22',
    city: 'Москва',
    status: 'В доставке',
    deliveryDate: new Date('2025-12-14T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 27000
  },
  {
    id: '11',
    description: 'Поставка запчастей',
    createdAt: new Date('2025-11-27T13:40:00'),
    author: 'Оператор 1',
    photoLink: '',
    clientName: 'СТО "АвтоМир"',
    address: 'Нижний Новгород, ул. Гаражная, 4',
    city: 'Нижний Новгород',
    status: 'Доставлен',
    deliveryDate: new Date('2025-12-03T00:00:00'),
    deliveryMethod: 'Транспортная компания',
    totalPrice: 120000
  },
  {
    id: '12',
    description: 'Заказ мебели для квартиры',
    createdAt: new Date('2025-12-04T15:30:00'),
    author: 'Оператор 3',
    photoLink: '',
    clientName: 'Иванова Мария',
    address: 'Москва, ул. Новая, 5-15',
    city: 'Москва',
    status: 'Подтвержден',
    deliveryDate: new Date('2025-12-21T00:00:00'),
    deliveryMethod: 'Транспортная компания',
    totalPrice: 145000
  },
  {
    id: '13',
    description: 'Корпоративный заказ канцелярии',
    createdAt: new Date('2025-12-06T09:50:00'),
    author: 'Оператор 2',
    photoLink: '',
    clientName: 'Банк "Надежный"',
    address: 'Москва, ул. Финансовая, 1',
    city: 'Москва',
    status: 'Новый',
    deliveryDate: new Date('2025-12-19T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 67000
  },
  {
    id: '14',
    description: 'Поставка серверных стоек',
    createdAt: new Date('2025-11-25T11:15:00'),
    author: 'Оператор 4',
    photoLink: '',
    clientName: 'Дата-центр "Север"',
    address: 'СПб, пр. Технологический, 8',
    city: 'Санкт-Петербург',
    status: 'Доставлен',
    deliveryDate: new Date('2025-12-01T00:00:00'),
    deliveryMethod: 'Транспортная компания',
    totalPrice: 1320000
  },
  {
    id: '15',
    description: 'Экспресс-доставка документов',
    createdAt: new Date('2025-12-12T09:10:00'),
    author: 'Оператор 1',
    photoLink: '',
    clientName: 'Юридическая фирма "Право+"',
    address: 'Москва, ул. Правовая, 9',
    city: 'Москва',
    status: 'В доставке',
    deliveryDate: new Date('2025-12-12T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 2500
  },
  {
    id: '16',
    description: 'Поставка медикаментов',
    createdAt: new Date('2025-11-29T10:25:00'),
    author: 'Оператор 2',
    photoLink: '',
    clientName: 'Клиника "Здоровье"',
    address: 'Казань, ул. Медицинская, 2',
    city: 'Казань',
    status: 'Подтвержден',
    deliveryDate: new Date('2025-12-13T00:00:00'),
    deliveryMethod: 'Транспортная компания',
    totalPrice: 430000
  },
  {
    id: '17',
    description: 'Поставка косметики',
    createdAt: new Date('2025-12-07T17:45:00'),
    author: 'Оператор 3',
    photoLink: '',
    clientName: 'Магазин "Красота"',
    address: 'Москва, ул. Салонная, 3',
    city: 'Москва',
    status: 'Новый',
    deliveryDate: new Date('2025-12-18T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 54000
  },
  {
    id: '18',
    description: 'Регулярная поставка воды',
    createdAt: new Date('2025-12-01T08:30:00'),
    author: 'Оператор 1',
    photoLink: '',
    clientName: 'Бизнес-центр "Горизонт"',
    address: 'Москва, ул. Высотная, 12',
    city: 'Москва',
    status: 'Доставлен',
    deliveryDate: new Date('2025-12-08T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 12000
  },
  {
    id: '19',
    description: 'Онлайн-заказ техники',
    createdAt: new Date('2025-12-09T19:00:00'),
    author: 'Оператор 2',
    photoLink: '',
    clientName: 'Смирнов Алексей',
    address: 'СПб, ул. Морская, 11-24',
    city: 'Санкт-Петербург',
    status: 'Новый',
    deliveryDate: new Date('2025-12-20T00:00:00'),
    deliveryMethod: 'Курьер',
    totalPrice: 56000
  },
  {
    id: '20',
    description: 'Спецзаказ оборудования',
    createdAt: new Date('2025-11-26T12:30:00'),
    author: 'Оператор 4',
    photoLink: '',
    clientName: 'НИИ "Технологии будущего"',
    address: 'Москва, пр. Научный, 3',
    city: 'Москва',
    status: 'Подтвержден',
    deliveryDate: new Date('2025-12-22T00:00:00'),
    deliveryMethod: 'Транспортная компания',
    totalPrice: 1890000
  }
];

// -------------------- КЛАСС МОДЕЛИ ЗАКАЗОВ --------------------

class OrdersCollection {
  constructor(objs = []) {
    // В конструкторе просто инициализируем коллекцию, НЕ сохраняя её в localStorage
    if (Array.isArray(objs)) {
      this._orders = objs.map((o) => ({ ...o }));
    } else {
      this._orders = [];
    }
  }

  _isString(value) {
    return typeof value === 'string' || value instanceof String;
  }

  _isNonEmptyString(value) {
    return this._isString(value) && value.trim().length > 0;
  }

  _isValidDate(value) {
    return value instanceof Date && !Number.isNaN(value.getTime());
  }

  _isUniqueId(id) {
    return !this._orders.some((o) => o.id === id);
  }

  _copy(obj) {
    return { ...obj };
  }

  save() {
    try {
      const toStore = this._orders.map((o) => ({
        ...o,
        createdAt: o.createdAt instanceof Date ? o.createdAt.toISOString() : o.createdAt,
        deliveryDate: o.deliveryDate instanceof Date ? o.deliveryDate.toISOString() : o.deliveryDate
      }));
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Не удалось сохранить данные в localStorage', e);
    }
  }

  restore() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      const restored = parsed
        .map((o) => ({
          ...o,
          createdAt: new Date(o.createdAt),
          deliveryDate: new Date(o.deliveryDate)
        }))
        .filter((o) => this.validateObj(o, { checkIdUniqueness: false }));
      this._orders = restored;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Не удалось восстановить данные из localStorage', e);
    }
  }

  _normalizeFilter(filterConfig = {}) {
    const filter = {};
    if (!filterConfig || typeof filterConfig !== 'object') {
      return filter;
    }
    const allowed = [
      'id',
      'author',
      'status',
      'city',
      'deliveryMethod',
      'clientName',
      'description',
      'createdAtFrom',
      'createdAtTo',
      'deliveryDateFrom',
      'deliveryDateTo',
      'minTotalPrice',
      'maxTotalPrice'
    ];
    for (const key of allowed) {
      if (Object.prototype.hasOwnProperty.call(filterConfig, key)) {
        filter[key] = filterConfig[key];
      }
    }
    return filter;
  }

  _applyFilter(list, filterConfig = {}) {
    const filter = this._normalizeFilter(filterConfig);
    return list.filter((o) => {
      if (filter.id && o.id !== filter.id) return false;
      if (filter.author && o.author !== filter.author) return false;
      if (filter.status && o.status !== filter.status) return false;
      if (filter.city && o.city !== filter.city) return false;
      if (filter.deliveryMethod && o.deliveryMethod !== filter.deliveryMethod) return false;
      if (filter.clientName && !o.clientName.toLowerCase().includes(String(filter.clientName).toLowerCase())) {
        return false;
      }
      if (filter.description && !o.description.toLowerCase().includes(String(filter.description).toLowerCase())) {
        return false;
      }
      if (filter.createdAtFrom && o.createdAt < filter.createdAtFrom) return false;
      if (filter.createdAtTo && o.createdAt > filter.createdAtTo) return false;
      if (filter.deliveryDateFrom && o.deliveryDate < filter.deliveryDateFrom) return false;
      if (filter.deliveryDateTo && o.deliveryDate > filter.deliveryDateTo) return false;
      if (typeof filter.minTotalPrice === 'number' && o.totalPrice < filter.minTotalPrice) return false;
      if (typeof filter.maxTotalPrice === 'number' && o.totalPrice > filter.maxTotalPrice) return false;
      return true;
    });
  }

  _sort(list, sortBy = 'createdAt', ascending = false) {
    const arr = list.slice();
    arr.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      // Специальная обработка для ID: сортируем по числовому значению, а не как строки
      if (sortBy === 'id') {
        const numA = Number.parseInt(valA, 10);
        const numB = Number.parseInt(valB, 10);
        if (Number.isNaN(numA) || Number.isNaN(numB)) {
          // если ID не число, сортируем как строки
          const strA = String(valA);
          const strB = String(valB);
          if (strA === strB) return 0;
          if (ascending) {
            return strA < strB ? -1 : 1;
          }
          return strA > strB ? -1 : 1;
        }
        return ascending ? numA - numB : numB - numA;
      }
      if (valA instanceof Date && valB instanceof Date) {
        return ascending ? valA - valB : valB - valA;
      }
      if (typeof valA === 'number' && typeof valB === 'number') {
        return ascending ? valA - valB : valB - valA;
      }
      const strA = String(valA);
      const strB = String(valB);
      if (strA === strB) return 0;
      if (ascending) {
        return strA < strB ? -1 : 1;
      }
      return strA > strB ? -1 : 1;
    });
    return arr;
  }

  getObjs(skip = 0, top = 10, filterConfig = {}, sortOptions = {}) {
    const safeSkip = Number.isInteger(skip) && skip >= 0 ? skip : 0;
    const safeTop = Number.isInteger(top) && top >= 0 ? top : 10;

    const filtered = this._applyFilter(this._orders, filterConfig);
    const sortBy = sortOptions.sortBy || 'createdAt';
    const ascending = Boolean(sortOptions.ascending);
    const sorted = this._sort(filtered, sortBy, ascending);

    return sorted.slice(safeSkip, safeSkip + safeTop).map((o) => this._copy(o));
  }

  getObj(id) {
    if (!this._isNonEmptyString(id)) return null;
    const found = this._orders.find((o) => o.id === id);
    return found ? this._copy(found) : null;
  }

  validateObj(obj, { checkIdUniqueness = true } = {}) {
    if (!obj || typeof obj !== 'object') return false;

    if (!this._isNonEmptyString(obj.id)) return false;
    if (checkIdUniqueness && !this._isUniqueId(obj.id)) return false;

    if (!this._isNonEmptyString(obj.description) || obj.description.length >= 200) return false;
    if (!this._isNonEmptyString(obj.author)) return false;

    if (!this._isValidDate(obj.createdAt)) return false;
    if (!this._isValidDate(obj.deliveryDate)) return false;

    if (!this._isNonEmptyString(obj.clientName)) return false;
    if (!this._isNonEmptyString(obj.address)) return false;
    if (!this._isNonEmptyString(obj.city)) return false;
    if (!this._isNonEmptyString(obj.status)) return false;
    if (!this._isNonEmptyString(obj.deliveryMethod)) return false;

    if (typeof obj.totalPrice !== 'number' || Number.isNaN(obj.totalPrice) || obj.totalPrice < 0) return false;

    if (obj.photoLink != null && obj.photoLink !== '' && !this._isNonEmptyString(obj.photoLink)) return false;

    return true;
  }

  addObj(obj) {
    const copy = this._copy(obj);
    if (!this.validateObj(copy, { checkIdUniqueness: true })) {
      return false;
    }
    this._orders.push(copy);
    this.save();
    return true;
  }

  editObj(id, changes) {
    if (!this._isNonEmptyString(id) || !changes || typeof changes !== 'object') {
      return false;
    }
    const index = this._orders.findIndex((o) => o.id === id);
    if (index === -1) return false;

    const original = this._orders[index];
    const forbidden = ['id', 'author', 'createdAt'];
    const updated = { ...original };
    for (const key of Object.keys(changes)) {
      if (forbidden.includes(key)) continue;
      if (changes[key] !== undefined) {
        updated[key] = changes[key];
      }
    }

    if (!this.validateObj(updated, { checkIdUniqueness: false })) {
      return false;
    }

    this._orders[index] = updated;
    this.save();
    return true;
  }

  removeObj(id) {
    if (!this._isNonEmptyString(id)) return false;
    const index = this._orders.findIndex((o) => o.id === id);
    if (index === -1) return false;
    this._orders.splice(index, 1);
    this.save();
    return true;
  }

  addAll(objs = []) {
    if (!Array.isArray(objs)) return [];
    const notAdded = [];
    for (const obj of objs) {
      if (!this.addObj(obj)) {
        notAdded.push(obj);
      }
    }
    return notAdded;
  }

  clear() {
    this._orders = [];
    this.save();
  }

  get length() {
    return this._orders.length;
  }
}

// -------------------- VIEW --------------------

class OrdersView {
  constructor(listContainer, paginationContainer) {
    this._listContainer = listContainer;
    this._paginationContainer = paginationContainer;
  }

  clearList() {
    if (this._listContainer) {
      this._listContainer.innerHTML = '';
    }
  }

  renderHeader() {
    if (!this._listContainer) return;
    const header = document.createElement('div');
    header.className = 'order-list-header';
    header.innerHTML = `
      <span>ID</span>
      <span>Клиент</span>
      <span>Адрес</span>
      <span>Статус</span>
      <span>Дата доставки</span>
    `;
    this._listContainer.appendChild(header);
  }

  renderList(orders) {
    this.clearList();
    if (!this._listContainer) return;
    this.renderHeader();
    orders.forEach((order) => {
      this.appendOrder(order);
    });
  }

  appendOrder(order) {
    if (!this._listContainer) return;
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'order-row';
    row.dataset.id = order.id;

    const statusClass =
      order.status === 'Новый'
        ? 'status status--new'
        : order.status === 'Доставлен'
        ? 'status status--done'
        : 'status status--in-progress';

    const deliveryDate =
      order.deliveryDate instanceof Date
        ? order.deliveryDate.toLocaleDateString('ru-RU')
        : String(order.deliveryDate);

    row.innerHTML = `
      <span>#${order.id}</span>
      <span>${order.clientName}</span>
      <span>${order.address}</span>
      <span class="${statusClass}">${order.status}</span>
      <span>${deliveryDate}</span>
    `;

    this._listContainer.appendChild(row);
  }

  renderPagination(totalCount, skip, top) {
    if (!this._paginationContainer) return;
    this._paginationContainer.innerHTML = '';
    const currentPage = Math.floor(skip / top) + 1;
    const totalPages = top > 0 ? Math.max(1, Math.ceil(totalCount / top)) : 1;

    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'btn btn-small';
    prevBtn.textContent = '« Предыдущая страница';
     prevBtn.dataset.direction = 'prev';
    prevBtn.disabled = currentPage <= 1;

    const info = document.createElement('span');
    info.className = 'pagination-info';
    info.textContent = `Страница ${currentPage} из ${totalPages}`;

    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'btn btn-small';
    nextBtn.textContent = 'Следующая страница »';
     nextBtn.dataset.direction = 'next';
    nextBtn.disabled = currentPage >= totalPages;

    this._paginationContainer.append(prevBtn, info, nextBtn);
  }
}

// -------------------- МОДЕЛЬ И VIEW ДЛЯ ПОЛЬЗОВАТЕЛЕЙ --------------------

const USERS_STORAGE_KEY = 'usersCollection';

const initialUsers = [
  { login: 'admin', role: 'Администратор', status: 'Активен' },
  { login: 'operator1', role: 'Оператор', status: 'Активен' },
  { login: 'operator2', role: 'Оператор', status: 'Требует смены пароля' },
  { login: 'courier1', role: 'Курьер', status: 'Активен' },
  { login: 'courier2', role: 'Курьер', status: 'Заблокирован' }
];

class UsersCollection {
  constructor(users = []) {
    // Аналогично заказам: не сохраняем в localStorage из конструктора
    if (Array.isArray(users)) {
      this._users = users.map((u) => ({ ...u }));
    } else {
      this._users = [];
    }
  }

  _copy(u) {
    return { ...u };
  }

  _isNonEmptyString(v) {
    return typeof v === 'string' && v.trim().length > 0;
  }

  _isUniqueLogin(login) {
    return !this._users.some((u) => u.login === login);
  }

  validateUser(user, { checkLoginUniqueness = true } = {}) {
    if (!user || typeof user !== 'object') return false;
    if (!this._isNonEmptyString(user.login)) return false;
    if (checkLoginUniqueness && !this._isUniqueLogin(user.login)) return false;
    if (!this._isNonEmptyString(user.role)) return false;
    if (!this._isNonEmptyString(user.status)) return false;
    return true;
  }

  addUser(user) {
    const copy = this._copy(user);
    if (!this.validateUser(copy, { checkLoginUniqueness: true })) return false;
    this._users.push(copy);
    this.save();
    return true;
  }

  editUser(login, changes) {
    if (!this._isNonEmptyString(login) || !changes || typeof changes !== 'object') return false;
    const idx = this._users.findIndex((u) => u.login === login);
    if (idx === -1) return false;
    const updated = { ...this._users[idx], ...changes, login };
    if (!this.validateUser(updated, { checkLoginUniqueness: false })) return false;
    this._users[idx] = updated;
    this.save();
    return true;
  }

  removeUser(login) {
    if (!this._isNonEmptyString(login)) return false;
    const idx = this._users.findIndex((u) => u.login === login);
    if (idx === -1) return false;
    this._users.splice(idx, 1);
    this.save();
    return true;
  }

  getUser(login) {
    const found = this._users.find((u) => u.login === login);
    return found ? this._copy(found) : null;
  }

  getAll() {
    return this._users.map((u) => this._copy(u));
  }

  addAll(users = []) {
    if (!Array.isArray(users)) return [];
    const notAdded = [];
    users.forEach((u) => {
      if (!this.addUser(u)) {
        notAdded.push(u);
      }
    });
    return notAdded;
  }

  save() {
    try {
      window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(this._users));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Не удалось сохранить пользователей в localStorage', e);
    }
  }

  restore() {
    try {
      const raw = window.localStorage.getItem(USERS_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      const valid = parsed.filter((u) => this.validateUser(u, { checkLoginUniqueness: false }));
      this._users = valid;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Не удалось восстановить пользователей из localStorage', e);
    }
  }
}

class UsersView {
  constructor(listContainer) {
    this._listContainer = listContainer;
  }

  renderList(users) {
    if (!this._listContainer) return;
    this._listContainer.innerHTML = '';
    const header = document.createElement('div');
    header.className = 'user-row user-row--header';
    header.innerHTML = `
      <span>Логин</span>
      <span>Роль</span>
      <span>Статус</span>
    `;
    this._listContainer.appendChild(header);

    users.forEach((user) => {
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'user-row';
      row.dataset.login = user.login;

      let statusClass = 'status status--in-progress';
      if (user.status === 'Активен') statusClass = 'status status--done';
      else if (user.status === 'Заблокирован') statusClass = 'status status--new';

      row.innerHTML = `
        <span>${user.login}</span>
        <span>${user.role}</span>
        <span class="${statusClass}">${user.status}</span>
      `;
      this._listContainer.appendChild(row);
    });
  }
}

// -------------------- ГЛОБАЛЬНЫЙ МОДУЛЬ --------------------

const App = (function () {
  const collection = new OrdersCollection(initialOrders);

  let ordersView = null;
  let searchView = null;
  let usersCollection = null;
  let usersView = null;

  const pageSize = 10;
  let currentSkip = 0;
  let ordersFilter = {};
  let ordersSort = { sortBy: 'createdAt', ascending: false };

  let searchSkip = 0;
  let searchFilter = {};

  function _initViews() {
    const ordersListEl = document.getElementById('orders-list');
    const ordersPaginationEl = document.getElementById('orders-pagination');
    const searchResultsEl = document.getElementById('search-results');
    const searchPaginationEl = document.getElementById('search-pagination');
    const usersListEl = document.getElementById('admin-user-list');

    if (ordersListEl) {
      ordersView = new OrdersView(ordersListEl, ordersPaginationEl);
    }
    if (searchResultsEl) {
      searchView = new OrdersView(searchResultsEl, searchPaginationEl);
      // внешний вид для компактного списка задаётся только стилями
    }

    if (usersListEl) {
      usersView = new UsersView(usersListEl);
    }
  }

  function _renderCurrentUser() {
    const userEl = document.getElementById('current-user');
    if (!userEl) return;
    if (currentUser) {
      userEl.innerHTML = `Пользователь: <strong>${currentUser}</strong>`;
    } else {
      userEl.textContent = 'Не авторизован';
    }
  }

  function _renderInitial() {
    collection.restore();
    if (collection.length === 0) {
      collection.addAll(initialOrders);
      collection.save();
    }

    if (!usersCollection) {
      usersCollection = new UsersCollection(initialUsers);
    }
    usersCollection.restore();
    if (usersCollection.getAll().length === 0) {
      usersCollection.addAll(initialUsers);
      usersCollection.save();
    }

    _renderOrdersList();
    _renderSearchList();
    _renderUsersList();
  }

  function _renderOrdersList() {
    if (!ordersView) return;
    const filtered = collection._applyFilter(collection._orders, ordersFilter);
    const total = filtered.length;
    const page = collection.getObjs(currentSkip, pageSize, ordersFilter, ordersSort);
    ordersView.renderList(page);
    ordersView.renderPagination(total, currentSkip, pageSize);
  }

  function _renderSearchList() {
    if (!searchView) return;
    const filtered = collection._applyFilter(collection._orders, searchFilter);
    const total = filtered.length;
    const page = collection.getObjs(searchSkip, pageSize, searchFilter, { sortBy: 'createdAt', ascending: false });
    searchView.renderList(page);
    searchView.renderPagination(total, searchSkip, pageSize);
  }

  function _renderUsersList() {
    if (!usersView || !usersCollection) return;
    usersView.renderList(usersCollection.getAll());
  }

  function _bindAuthForm() {
    const form = document.getElementById('auth-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const loginInput = document.getElementById('auth-login');
      const login = loginInput ? loginInput.value.trim() : '';
      if (!login) {
        // eslint-disable-next-line no-alert
        alert('Введите логин или e-mail');
        return;
      }
      setUser(login);
      if (loginInput) {
        loginInput.value = '';
      }
      const passwordInput = document.getElementById('auth-password');
      if (passwordInput) {
        passwordInput.value = '';
      }
      window.location.hash = '#home';
    });
  }

  function _fillOrderForm(order) {
    const idEl = document.getElementById('order-id');
    const statusEl = document.getElementById('order-status');
    const clientEl = document.getElementById('order-client');
    const addressEl = document.getElementById('order-address');
    const productEl = document.getElementById('order-product');
    const qtyEl = document.getElementById('order-qty');
    const dateEl = document.getElementById('order-date');
    const methodEl = document.getElementById('order-method');
    const commentEl = document.getElementById('order-comment');
    const cityEl = document.getElementById('order-city');
    const priceEl = document.getElementById('order-price');

    if (idEl) idEl.value = order.id || '';
    if (statusEl) statusEl.value = order.status || 'Новый';
    if (clientEl) clientEl.value = order.clientName || '';
    if (addressEl) addressEl.value = order.address || '';
    if (cityEl) cityEl.value = order.city || '';
    if (priceEl) priceEl.value = String(order.totalPrice != null ? order.totalPrice : '');

    if (dateEl) {
      if (order.deliveryDate instanceof Date && !Number.isNaN(order.deliveryDate.getTime())) {
        dateEl.value = order.deliveryDate.toISOString().slice(0, 10);
      } else {
        dateEl.value = '';
      }
    }

    if (methodEl) methodEl.value = order.deliveryMethod || 'Курьер';

    if (productEl) productEl.value = '';
    if (qtyEl) qtyEl.value = '1';
    if (commentEl) commentEl.value = order.description || '';
  }

  function _clearOrderForm() {
    _fillOrderForm({
      id: '',
      status: 'Новый',
      clientName: '',
      address: '',
      city: '',
      totalPrice: '',
      deliveryDate: null,
      deliveryMethod: 'Курьер',
      description: ''
    });
  }

  function _bindOrderForm() {
    const form = document.getElementById('order-form');
    const newBtn = document.getElementById('order-new-btn');
    const deleteBtn = document.getElementById('order-delete-btn');

    if (newBtn) {
      newBtn.addEventListener('click', (e) => {
        e.preventDefault();
        _clearOrderForm();
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const idEl = document.getElementById('order-id');
        const id = idEl ? idEl.value.trim() : '';
        if (!id) {
          // eslint-disable-next-line no-alert
          alert('Сначала выберите заказ для удаления');
          return;
        }
        if (removeObj(id)) {
          _clearOrderForm();
        } else {
          // eslint-disable-next-line no-alert
          alert('Не удалось удалить заказ');
        }
      });
    }

    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const idEl = document.getElementById('order-id');
      const statusEl = document.getElementById('order-status');
      const clientEl = document.getElementById('order-client');
      const addressEl = document.getElementById('order-address');
      const productEl = document.getElementById('order-product');
      const qtyEl = document.getElementById('order-qty');
      const dateEl = document.getElementById('order-date');
      const methodEl = document.getElementById('order-method');
      const commentEl = document.getElementById('order-comment');
      const cityEl = document.getElementById('order-city');
      const priceEl = document.getElementById('order-price');

      const id = idEl ? idEl.value.trim() : '';
      const clientName = clientEl ? clientEl.value.trim() : '';
      const address = addressEl ? addressEl.value.trim() : '';
      const city = cityEl ? cityEl.value.trim() : '';
      const status = statusEl ? statusEl.value : 'Новый';
      const method = methodEl ? methodEl.value : 'Курьер';
      const dateStr = dateEl ? dateEl.value : '';
      const product = productEl ? productEl.value.trim() : '';
      const qty = qtyEl ? Number(qtyEl.value) || 1 : 1;
      const comment = commentEl ? commentEl.value.trim() : '';
      const price = priceEl ? Number(priceEl.value) || 0 : 0;

      let deliveryDate = null;
      if (dateStr) {
        deliveryDate = new Date(`${dateStr}T00:00:00`);
      } else {
        deliveryDate = new Date();
      }

      const descriptionBase =
        comment ||
        (product
          ? `Заказ товара "${product}" x${qty} для клиента ${clientName || 'без имени'}`
          : `Заказ для клиента ${clientName || 'без имени'}`);
      const description =
        descriptionBase.length > 190 ? `${descriptionBase.slice(0, 187)}...` : descriptionBase;

      if (!clientName || !address || !city) {
        // eslint-disable-next-line no-alert
        alert('Поля "Клиент", "Адрес" и "Город" обязательны');
        return;
      }

      if (id) {
        const ok = editObj(id, {
          status,
          clientName,
          address,
          city,
          deliveryDate,
          deliveryMethod: method,
          description,
          totalPrice: price
        });
        if (!ok) {
          // eslint-disable-next-line no-alert
          alert('Не удалось сохранить изменения. Проверьте корректность данных.');
          return;
        }
      } else {
        const ok = addObj({
          description,
          clientName,
          address,
          city,
          status,
          deliveryDate,
          deliveryMethod: method,
          totalPrice: price,
          photoLink: ''
        });
        if (!ok) {
          // eslint-disable-next-line no-alert
          alert('Не удалось добавить заказ. Возможно, вы не авторизованы или данные некорректны.');
          return;
        }
      }

      _clearOrderForm();
    });
  }

  function _bindOrdersListClick() {
    const listEl = document.getElementById('orders-list');
    if (!listEl) return;
    listEl.addEventListener('click', (e) => {
      const row = e.target.closest('.order-row');
      if (!row) return;
      const { id } = row.dataset;
      if (!id) return;
      const order = collection.getObj(id);
      if (order) {
        _fillOrderForm(order);
      }
    });
  }

  function _bindSearchForm() {
    const form = document.getElementById('search-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const textEl = document.getElementById('search-text');
      const statusEl = document.getElementById('search-status');
      const dateFromEl = document.getElementById('search-date-from');
      const dateToEl = document.getElementById('search-date-to');
      const methodEl = document.getElementById('search-method');

      const text = textEl ? textEl.value.trim() : '';
      const status = statusEl ? statusEl.value : '';
      const dateFromStr = dateFromEl ? dateFromEl.value : '';
      const dateToStr = dateToEl ? dateToEl.value : '';
      const method = methodEl ? methodEl.value : '';

      const filter = {};
      if (text) {
        filter.clientName = text;
      }
      if (status) {
        filter.status = status;
      }
      if (method) {
        filter.deliveryMethod = method;
      }
      if (dateFromStr) {
        filter.deliveryDateFrom = new Date(`${dateFromStr}T00:00:00`);
      }
      if (dateToStr) {
        filter.deliveryDateTo = new Date(`${dateToStr}T23:59:59`);
      }

      searchFilter = filter;
      searchSkip = 0;
      _renderSearchList();
    });
  }

  function _bindHomeButtons() {
    const ordersBtn = document.getElementById('home-orders-btn');
    const searchBtn = document.getElementById('home-search-btn');
    const adminBtn = document.getElementById('home-admin-btn');
    const authBtn = document.getElementById('home-auth-btn');

    if (ordersBtn) {
      ordersBtn.addEventListener('click', () => {
        window.location.hash = '#orders';
      });
    }
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        window.location.hash = '#search';
      });
    }
    if (adminBtn) {
      adminBtn.addEventListener('click', () => {
        window.location.hash = '#admin';
      });
    }
    if (authBtn) {
      authBtn.addEventListener('click', () => {
        window.location.hash = '#auth';
      });
    }
  }

  function _bindOrdersSortAndFilter() {
    const container = document.querySelector('#orders .list-controls');
    if (!container) return;
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const sortField = btn.dataset.sort;
      const sortOrder = btn.dataset.order;
      const filterStatus = btn.dataset.filterStatus;

      if (sortField) {
        ordersSort = {
          sortBy: sortField,
          ascending: sortOrder === 'asc'
        };
        currentSkip = 0;
        _renderOrdersList();
      } else if (filterStatus) {
        if (filterStatus === 'active') {
          ordersFilter = { status: 'Новый' };
        } else if (filterStatus === 'done') {
          ordersFilter = { status: 'Доставлен' };
        } else {
          ordersFilter = {};
        }
        currentSkip = 0;
        _renderOrdersList();
      }
    });
  }

  function _changeOrdersPage(direction) {
    const filtered = collection._applyFilter(collection._orders, ordersFilter);
    const total = filtered.length;
    const totalPages = pageSize > 0 ? Math.max(1, Math.ceil(total / pageSize)) : 1;
    let currentPage = Math.floor(currentSkip / pageSize) + 1;
    currentPage += direction;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    currentSkip = (currentPage - 1) * pageSize;
    _renderOrdersList();
  }

  function _changeSearchPage(direction) {
    const filtered = collection._applyFilter(collection._orders, searchFilter);
    const total = filtered.length;
    const totalPages = pageSize > 0 ? Math.max(1, Math.ceil(total / pageSize)) : 1;
    let currentPage = Math.floor(searchSkip / pageSize) + 1;
    currentPage += direction;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    searchSkip = (currentPage - 1) * pageSize;
    _renderSearchList();
  }

  function _bindPagination() {
    const ordersPaginationEl = document.getElementById('orders-pagination');
    if (ordersPaginationEl) {
      ordersPaginationEl.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn || btn.disabled) return;
        const direction = btn.dataset.direction;
        if (direction === 'prev') {
          _changeOrdersPage(-1);
        } else if (direction === 'next') {
          _changeOrdersPage(1);
        }
      });
    }

    const searchPaginationEl = document.getElementById('search-pagination');
    if (searchPaginationEl) {
      searchPaginationEl.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn || btn.disabled) return;
        const direction = btn.dataset.direction;
        if (direction === 'prev') {
          _changeSearchPage(-1);
        } else if (direction === 'next') {
          _changeSearchPage(1);
        }
      });
    }
  }

  function _bindAdmin() {
    const listEl = document.getElementById('admin-user-list');
    const form = document.getElementById('admin-user-form');
    const newBtn = document.getElementById('admin-user-new');
    const deleteBtn = document.getElementById('admin-user-delete');

    if (listEl) {
      listEl.addEventListener('click', (e) => {
        const row = e.target.closest('.user-row');
        if (!row || row.classList.contains('user-row--header')) return;
        const login = row.dataset.login;
        if (!login || !usersCollection) return;
        const user = usersCollection.getUser(login);
        if (user) {
          const loginEl = document.getElementById('user-login');
          const roleEl = document.getElementById('user-role');
          const statusEl = document.getElementById('user-status');
          const passEl = document.getElementById('user-password');
          if (loginEl) loginEl.value = user.login;
          if (roleEl) roleEl.value = user.role;
          if (statusEl) statusEl.value = user.status;
          if (passEl) passEl.value = '';
        }
      });
    }

    if (newBtn) {
      newBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const loginEl = document.getElementById('user-login');
        const roleEl = document.getElementById('user-role');
        const statusEl = document.getElementById('user-status');
        const passEl = document.getElementById('user-password');
        if (loginEl) loginEl.value = '';
        if (roleEl) roleEl.value = 'Оператор';
        if (statusEl) statusEl.value = 'Активен';
        if (passEl) passEl.value = '';
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!usersCollection) return;
        const loginEl = document.getElementById('user-login');
        const login = loginEl ? loginEl.value.trim() : '';
        if (!login) {
          // eslint-disable-next-line no-alert
          alert('Сначала выберите пользователя для удаления');
          return;
        }
        const ok = usersCollection.removeUser(login);
        if (!ok) {
          // eslint-disable-next-line no-alert
          alert('Не удалось удалить пользователя');
          return;
        }
        _renderUsersList();
        if (loginEl) loginEl.value = '';
        const roleEl = document.getElementById('user-role');
        const statusEl = document.getElementById('user-status');
        const passEl = document.getElementById('user-password');
        if (roleEl) roleEl.value = 'Оператор';
        if (statusEl) statusEl.value = 'Активен';
        if (passEl) passEl.value = '';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!usersCollection) return;
        const loginEl = document.getElementById('user-login');
        const roleEl = document.getElementById('user-role');
        const statusEl = document.getElementById('user-status');

        const login = loginEl ? loginEl.value.trim() : '';
        const role = roleEl ? roleEl.value : 'Оператор';
        const status = statusEl ? statusEl.value : 'Активен';

        if (!login) {
          // eslint-disable-next-line no-alert
          alert('Поле "Логин" обязательно');
          return;
        }

        const existing = usersCollection.getUser(login);
        let ok;
        if (existing) {
          ok = usersCollection.editUser(login, { role, status });
        } else {
          ok = usersCollection.addUser({ login, role, status });
        }
        if (!ok) {
          // eslint-disable-next-line no-alert
          alert('Не удалось сохранить пользователя (возможно, логин уже занят или данные некорректны)');
          return;
        }
        _renderUsersList();
      });
    }
  }

  function _bindEvents() {
    _bindAuthForm();
    _bindOrderForm();
    _bindOrdersListClick();
    _bindSearchForm();
    _bindHomeButtons();
    _bindOrdersSortAndFilter();
    _bindPagination();
    _bindAdmin();
  }

  // -------------------- Глобальные функции для консоли --------------------

  function getObjs(skip, top, filterConfig, sortOptions) {
    const result = collection.getObjs(skip, top, filterConfig, sortOptions);
    _renderOrdersList();
    return result;
  }

  function getObj(id) {
    return collection.getObj(id);
  }

  function addObj(obj) {
    if (!obj || typeof obj !== 'object') {
      return false;
    }
    if (!obj.id) {
      const maxId =
        collection.length === 0
          ? 0
          : Math.max(
              ...collection._orders.map((o) => {
                const n = Number.parseInt(o.id, 10);
                return Number.isNaN(n) ? 0 : n;
              })
            );
      obj.id = String(maxId + 1);
    }
    if (!obj.createdAt) {
      obj.createdAt = new Date();
    }
    if (!obj.author) {
      obj.author = currentUser || 'Анонимный пользователь';
    }

    const ok = collection.addObj(obj);
    if (ok && ordersView) {
      const page = collection.getObjs(currentSkip, pageSize);
      ordersView.renderList(page);
      ordersView.renderPagination(collection.length, currentSkip, pageSize);
    }
    return ok;
  }

  function editObj(id, changes) {
    const ok = collection.editObj(id, changes);
    if (ok && ordersView) {
      const page = collection.getObjs(currentSkip, pageSize);
      ordersView.renderList(page);
      ordersView.renderPagination(collection.length, currentSkip, pageSize);
    }
    return ok;
  }

  function removeObj(id) {
    const ok = collection.removeObj(id);
    if (ok && ordersView) {
      if (currentSkip >= collection.length && currentSkip >= pageSize) {
        currentSkip -= pageSize;
      }
      const page = collection.getObjs(currentSkip, pageSize);
      ordersView.renderList(page);
      ordersView.renderPagination(collection.length, currentSkip, pageSize);
    }
    return ok;
  }

  function filterAndRender(filterConfig) {
    searchFilter = filterConfig || {};
    searchSkip = 0;
    _renderSearchList();
    return collection.getObjs(0, pageSize, searchFilter);
  }

  function setUser(nameOrNull) {
    currentUser = nameOrNull || null;
    _renderCurrentUser();
  }

  function clearAll() {
    collection.clear();
    _renderOrdersList();
    searchFilter = {};
    searchSkip = 0;
    _renderSearchList();
  }

  function init() {
    _initViews();
    _renderCurrentUser();
    _renderInitial();
    _bindEvents();
  }

  return {
    init,
    getObjs,
    getObj,
    addObj,
    editObj,
    removeObj,
    filterAndRender,
    setUser,
    clearAll,
    _collection: collection
  };
})();

window.addEventListener('DOMContentLoaded', () => {
  App.init();
});

// Примеры для проверки из консоли:
// App.getObjs(0, 10)
// App.getObjs(0, 10, { status: 'Новый' })
// App.addObj({ description: 'Тестовый заказ', clientName: 'Клиент', address: 'Адрес', city: 'Город', status: 'Новый', deliveryDate: new Date(), deliveryMethod: 'Курьер', totalPrice: 1000 })
// App.editObj('1', { status: 'Доставлен' })
// App.removeObj('2')
// App.filterAndRender({ city: 'Москва', status: 'Новый' })


