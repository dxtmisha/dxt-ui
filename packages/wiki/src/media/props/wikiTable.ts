import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiTable object contains properties for the Table component
 *
 * Объект wikiTable содержит свойства для компонента Table
 */
export const wikiTable: StorybookArgsToList = {
  'table.columns': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.value,
      type: 'string[]',
      description: {
        en: 'Column index names',
        ru: 'Имена индексов колонок'
      },
      value: [
        'id',
        'name',
        'email',
        'role',
        'department',
        'status',
        'phone',
        'city',
        'country',
        'age',
        'gender',
        'salary',
        'rating',
        'project',
        'startDate',
        'lastLogin'
      ]
    },
    hide: true
  },
  'table.header': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Table header data',
        ru: 'Данные шапки таблицы'
      },
      value: {
        id: 'ID',
        name: 'Name',
        email: 'Email',
        role: 'Role',
        department: 'Department',
        status: 'Status',
        phone: 'Phone',
        city: 'City',
        country: 'Country',
        age: 'Age',
        gender: 'Gender',
        salary: 'Salary',
        rating: 'Rating',
        project: 'Project',
        startDate: 'Start Date',
        lastLogin: 'Last Login'
      }
    },
    hide: true
  },
  'table.headerTop': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sticky positioning of the table header at the top',
        ru: 'Липкое позиционирование шапки таблицы сверху'
      }
    }
  },
  'table.list': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'List of row records',
        ru: 'Список записей строк'
      },
      value: [
        { id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'Developer', department: 'IT', status: 'Active', phone: '+1 555-0101', city: 'New York', country: 'USA', age: 28, gender: 'Female', salary: '$95,000', rating: 4.8, project: 'Alpha', startDate: '2021-03-15', lastLogin: '2026-07-23' },
        { id: '2', name: 'Bob Johnson', email: 'bob@example.com', role: 'Designer', department: 'Design', status: 'Pending', phone: '+1 555-0102', city: 'London', country: 'UK', age: 34, gender: 'Male', salary: '$85,000', rating: 4.5, project: 'Beta', startDate: '2020-06-10', lastLogin: '2026-07-22' },
        { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager', department: 'Management', status: 'Inactive', phone: '+1 555-0103', city: 'Paris', country: 'France', age: 42, gender: 'Male', salary: '$120,000', rating: 4.9, project: 'Gamma', startDate: '2018-11-01', lastLogin: '2026-07-15' },
        { id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'Analyst', department: 'Analytics', status: 'Active', phone: '+1 555-0104', city: 'Berlin', country: 'Germany', age: 30, gender: 'Female', salary: '$90,000', rating: 4.7, project: 'Delta', startDate: '2022-01-20', lastLogin: '2026-07-23' },
        { id: '5', name: 'Edward Norton', email: 'edward@example.com', role: 'Tester', department: 'QA', status: 'Pending', phone: '+1 555-0105', city: 'Tokyo', country: 'Japan', age: 26, gender: 'Male', salary: '$70,000', rating: 4.2, project: 'Epsilon', startDate: '2023-04-05', lastLogin: '2026-07-21' },
        { id: '6', name: 'Fiona Gallagher', email: 'fiona@example.com', role: 'DevOps', department: 'Infrastructure', status: 'Active', phone: '+1 555-0106', city: 'Sydney', country: 'Australia', age: 31, gender: 'Female', salary: '$105,000', rating: 4.6, project: 'Zeta', startDate: '2021-09-12', lastLogin: '2026-07-23' },
        { id: '7', name: 'George Clark', email: 'george@example.com', role: 'Architect', department: 'IT', status: 'Inactive', phone: '+1 555-0107', city: 'Toronto', country: 'Canada', age: 45, gender: 'Male', salary: '$140,000', rating: 5.0, project: 'Omega', startDate: '2016-02-01', lastLogin: '2026-07-10' },
        { id: '8', name: 'Hannah Abbott', email: 'hannah@example.com', role: 'Support', department: 'Support', status: 'Active', phone: '+1 555-0108', city: 'Singapore', country: 'Singapore', age: 25, gender: 'Female', salary: '$60,000', rating: 4.3, project: 'Alpha', startDate: '2023-08-15', lastLogin: '2026-07-23' },
        { id: '9', name: 'Ian Wright', email: 'ian@example.com', role: 'Developer', department: 'IT', status: 'Pending', phone: '+1 555-0109', city: 'New York', country: 'USA', age: 29, gender: 'Male', salary: '$92,000', rating: 4.4, project: 'Beta', startDate: '2022-05-10', lastLogin: '2026-07-20' },
        { id: '10', name: 'Julia Roberts', email: 'julia@example.com', role: 'Designer', department: 'Design', status: 'Active', phone: '+1 555-0110', city: 'London', country: 'UK', age: 37, gender: 'Female', salary: '$88,000', rating: 4.8, project: 'Gamma', startDate: '2019-10-01', lastLogin: '2026-07-23' },
        { id: '11', name: 'Kevin Bacon', email: 'kevin@example.com', role: 'Manager', department: 'Management', status: 'Inactive', phone: '+1 555-0111', city: 'Paris', country: 'France', age: 50, gender: 'Male', salary: '$130,000', rating: 4.7, project: 'Delta', startDate: '2015-04-12', lastLogin: '2026-07-01' },
        { id: '12', name: 'Laura Croft', email: 'laura@example.com', role: 'Analyst', department: 'Analytics', status: 'Active', phone: '+1 555-0112', city: 'Berlin', country: 'Germany', age: 32, gender: 'Female', salary: '$94,000', rating: 4.9, project: 'Epsilon', startDate: '2021-01-15', lastLogin: '2026-07-23' },
        { id: '13', name: 'Michael Scott', email: 'michael@example.com', role: 'Tester', department: 'QA', status: 'Pending', phone: '+1 555-0113', city: 'Tokyo', country: 'Japan', age: 41, gender: 'Male', salary: '$75,000', rating: 4.1, project: 'Zeta', startDate: '2017-07-20', lastLogin: '2026-07-19' },
        { id: '14', name: 'Nina Williams', email: 'nina@example.com', role: 'DevOps', department: 'Infrastructure', status: 'Active', phone: '+1 555-0114', city: 'Sydney', country: 'Australia', age: 27, gender: 'Female', salary: '$100,000', rating: 4.6, project: 'Omega', startDate: '2022-09-01', lastLogin: '2026-07-23' },
        { id: '15', name: 'Oliver Twist', email: 'oliver@example.com', role: 'Architect', department: 'IT', status: 'Inactive', phone: '+1 555-0115', city: 'Toronto', country: 'Canada', age: 38, gender: 'Male', salary: '$135,000', rating: 4.8, project: 'Alpha', startDate: '2018-03-10', lastLogin: '2026-07-05' },
        { id: '16', name: 'Paula Abdul', email: 'paula@example.com', role: 'Support', department: 'Support', status: 'Active', phone: '+1 555-0116', city: 'Singapore', country: 'Singapore', age: 33, gender: 'Female', salary: '$62,000', rating: 4.4, project: 'Beta', startDate: '2020-12-01', lastLogin: '2026-07-23' },
        { id: '17', name: 'Quinn Fabray', email: 'quinn@example.com', role: 'Developer', department: 'IT', status: 'Pending', phone: '+1 555-0117', city: 'New York', country: 'USA', age: 24, gender: 'Female', salary: '$88,000', rating: 4.5, project: 'Gamma', startDate: '2023-02-14', lastLogin: '2026-07-18' },
        { id: '18', name: 'Rachel Green', email: 'rachel@example.com', role: 'Designer', department: 'Design', status: 'Active', phone: '+1 555-0118', city: 'London', country: 'UK', age: 29, gender: 'Female', salary: '$86,000', rating: 4.7, project: 'Delta', startDate: '2021-08-20', lastLogin: '2026-07-23' },
        { id: '19', name: 'Sam Winchester', email: 'sam@example.com', role: 'Manager', department: 'Management', status: 'Inactive', phone: '+1 555-0119', city: 'Paris', country: 'France', age: 36, gender: 'Male', salary: '$115,000', rating: 4.6, project: 'Epsilon', startDate: '2019-05-11', lastLogin: '2026-07-12' },
        { id: '20', name: 'Tina Fey', email: 'tina@example.com', role: 'Analyst', department: 'Analytics', status: 'Active', phone: '+1 555-0120', city: 'Berlin', country: 'Germany', age: 39, gender: 'Female', salary: '$98,000', rating: 4.9, project: 'Zeta', startDate: '2017-11-05', lastLogin: '2026-07-23' },
        { id: '21', name: 'Uriel Septim', email: 'uriel@example.com', role: 'Tester', department: 'QA', status: 'Pending', phone: '+1 555-0121', city: 'Tokyo', country: 'Japan', age: 48, gender: 'Male', salary: '$78,000', rating: 4.3, project: 'Omega', startDate: '2016-09-30', lastLogin: '2026-07-17' },
        { id: '22', name: 'Victoria Beckham', email: 'victoria@example.com', role: 'DevOps', department: 'Infrastructure', status: 'Active', phone: '+1 555-0122', city: 'Sydney', country: 'Australia', age: 35, gender: 'Female', salary: '$110,000', rating: 4.8, project: 'Alpha', startDate: '2020-04-18', lastLogin: '2026-07-23' },
        { id: '23', name: 'Will Smith', email: 'will@example.com', role: 'Architect', department: 'IT', status: 'Inactive', phone: '+1 555-0123', city: 'Toronto', country: 'Canada', age: 43, gender: 'Male', salary: '$145,000', rating: 4.9, project: 'Beta', startDate: '2015-10-10', lastLogin: '2026-07-08' },
        { id: '24', name: 'Xena Warrior', email: 'xena@example.com', role: 'Support', department: 'Support', status: 'Active', phone: '+1 555-0124', city: 'Singapore', country: 'Singapore', age: 30, gender: 'Female', salary: '$65,000', rating: 4.5, project: 'Gamma', startDate: '2022-03-25', lastLogin: '2026-07-23' },
        { id: '25', name: 'Yvonne Strahovski', email: 'yvonne@example.com', role: 'Developer', department: 'IT', status: 'Pending', phone: '+1 555-0125', city: 'New York', country: 'USA', age: 31, gender: 'Female', salary: '$96,000', rating: 4.7, project: 'Delta', startDate: '2021-07-14', lastLogin: '2026-07-21' },
        { id: '26', name: 'Zack Morris', email: 'zack@example.com', role: 'Designer', department: 'Design', status: 'Active', phone: '+1 555-0126', city: 'London', country: 'UK', age: 28, gender: 'Male', salary: '$84,000', rating: 4.4, project: 'Epsilon', startDate: '2022-10-01', lastLogin: '2026-07-23' },
        { id: '27', name: 'Alexander Hamilton', email: 'alexander@example.com', role: 'Manager', department: 'Management', status: 'Inactive', phone: '+1 555-0127', city: 'Paris', country: 'France', age: 40, gender: 'Male', salary: '$125,000', rating: 4.8, project: 'Zeta', startDate: '2018-01-08', lastLogin: '2026-07-03' },
        { id: '28', name: 'Beatrice Potter', email: 'beatrice@example.com', role: 'Analyst', department: 'Analytics', status: 'Active', phone: '+1 555-0128', city: 'Berlin', country: 'Germany', age: 33, gender: 'Female', salary: '$92,000', rating: 4.6, project: 'Omega', startDate: '2020-11-15', lastLogin: '2026-07-23' },
        { id: '29', name: 'Christopher Nolan', email: 'christopher@example.com', role: 'Tester', department: 'QA', status: 'Pending', phone: '+1 555-0129', city: 'Tokyo', country: 'Japan', age: 46, gender: 'Male', salary: '$76,000', rating: 4.3, project: 'Alpha', startDate: '2017-05-22', lastLogin: '2026-07-16' },
        { id: '30', name: 'Deborah Morgan', email: 'deborah@example.com', role: 'DevOps', department: 'Infrastructure', status: 'Active', phone: '+1 555-0130', city: 'Sydney', country: 'Australia', age: 34, gender: 'Female', salary: '$108,000', rating: 4.7, project: 'Beta', startDate: '2019-08-30', lastLogin: '2026-07-23' },
        { id: '31', name: 'Ethan Hunt', email: 'ethan@example.com', role: 'Architect', department: 'IT', status: 'Inactive', phone: '+1 555-0131', city: 'Toronto', country: 'Canada', age: 39, gender: 'Male', salary: '$138,000', rating: 4.9, project: 'Gamma', startDate: '2016-12-05', lastLogin: '2026-07-09' },
        { id: '32', name: 'Grace Hopper', email: 'grace@example.com', role: 'Support', department: 'Support', status: 'Active', phone: '+1 555-0132', city: 'Singapore', country: 'Singapore', age: 44, gender: 'Female', salary: '$68,000', rating: 5.0, project: 'Delta', startDate: '2015-02-18', lastLogin: '2026-07-23' },
        { id: '33', name: 'Henry Cavill', email: 'henry@example.com', role: 'Developer', department: 'IT', status: 'Pending', phone: '+1 555-0133', city: 'New York', country: 'USA', age: 37, gender: 'Male', salary: '$99,000', rating: 4.8, project: 'Epsilon', startDate: '2018-09-01', lastLogin: '2026-07-20' },
        { id: '34', name: 'Isabel Allende', email: 'isabel@example.com', role: 'Designer', department: 'Design', status: 'Active', phone: '+1 555-0134', city: 'London', country: 'UK', age: 30, gender: 'Female', salary: '$87,000', rating: 4.6, project: 'Zeta', startDate: '2021-04-10', lastLogin: '2026-07-23' },
        { id: '35', name: 'Jack Sparrow', email: 'jack@example.com', role: 'Manager', department: 'Management', status: 'Inactive', phone: '+1 555-0135', city: 'Paris', country: 'France', age: 41, gender: 'Male', salary: '$118,000', rating: 4.2, project: 'Omega', startDate: '2017-03-20', lastLogin: '2026-07-11' },
        { id: '36', name: 'Katherine Johnson', email: 'katherine@example.com', role: 'Analyst', department: 'Analytics', status: 'Active', phone: '+1 555-0136', city: 'Berlin', country: 'Germany', age: 45, gender: 'Female', salary: '$102,000', rating: 5.0, project: 'Alpha', startDate: '2014-06-01', lastLogin: '2026-07-23' },
        { id: '37', name: 'Liam Neeson', email: 'liam@example.com', role: 'Tester', department: 'QA', status: 'Pending', phone: '+1 555-0137', city: 'Tokyo', country: 'Japan', age: 52, gender: 'Male', salary: '$80,000', rating: 4.5, project: 'Beta', startDate: '2016-01-15', lastLogin: '2026-07-14' },
        { id: '38', name: 'Mia Wallace', email: 'mia@example.com', role: 'DevOps', department: 'Infrastructure', status: 'Active', phone: '+1 555-0138', city: 'Sydney', country: 'Australia', age: 29, gender: 'Female', salary: '$104,000', rating: 4.7, project: 'Gamma', startDate: '2022-06-30', lastLogin: '2026-07-23' },
        { id: '39', name: 'Noah Calhoun', email: 'noah@example.com', role: 'Architect', department: 'IT', status: 'Inactive', phone: '+1 555-0139', city: 'Toronto', country: 'Canada', age: 36, gender: 'Male', salary: '$132,000', rating: 4.8, project: 'Delta', startDate: '2019-02-28', lastLogin: '2026-07-06' },
        { id: '40', name: 'Olivia Wilde', email: 'olivia@example.com', role: 'Support', department: 'Support', status: 'Active', phone: '+1 555-0140', city: 'Singapore', country: 'Singapore', age: 32, gender: 'Female', salary: '$64,000', rating: 4.6, project: 'Epsilon', startDate: '2021-11-12', lastLogin: '2026-07-23' }
      ]
    },
    hide: true
  }
}
