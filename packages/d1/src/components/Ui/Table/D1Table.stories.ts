import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Table from './D1Table.vue'
import { TableWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Table',
  component: D1Table,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableWikiStorybook.getWiki(),
  args: TableWikiStorybook.getValues()
} satisfies Meta<typeof D1Table>

export default meta

type Story = StoryObj<typeof meta>

export const Table: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Table },
    setup: () => ({ args }),
    template: `
      <D1Table v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableDefault: Story = {
  name: 'По умолчанию',
  render: () => ({
    components: { D1Table },
    template: `
        <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--padding" style="max-height: 360px;">
          <D1Table
            :columns="['id', 'name', 'status', 'role', 'email', 'age', 'country', 'city', 'salary']"
            :headerTop="true"
            :stickyLeft="['name']"
            :header="[
              {
                id: { label: 'ID', rowspan: 2, description: 'Index', tooltipLabel: 'Identifier', tooltipDescription: 'Unique number of the record.' },
                name: { label: 'Main info', colspan: 2, align: 'center', tooltipLabel: 'General info', tooltipDescription: 'Full name and active status.' },
                status: { style: { display: 'none' } },
                role: { label: 'Work', colspan: 3, align: 'center', tooltipLabel: 'Employment details', tooltipDescription: 'Job title, contact email, and age.' },
                email: { style: { display: 'none' } },
                age: { style: { display: 'none' } },
                country: { label: 'Address', colspan: 3, align: 'center', tooltipLabel: 'Location & Compensation', tooltipDescription: 'Location details and current salary.' },
                city: { style: { display: 'none' } },
                salary: { style: { display: 'none' } }
              },
              {
                id: '*none',
                name: 'Name',
                status: 'Status',
                role: 'Role',
                email: 'Email',
                age: 'Age',
                country: 'Country',
                city: 'City',
                salary: 'Salary'
              }
            ]"
            :tableItemColumnAttrs="{ id: { align: 'right' }, age: { align: 'right' }, salary: { align: 'right' } }"
            :list="[
              { id: '1', name: 'Elizabeth Perez', status: 'Active', role: 'Frontend Developer', email: 'elizabeth.perez1@example.com', age: 35, country: 'Vietnam', city: 'Da Nang', salary: '$8,400' },
              { id: '2', name: 'Viet White', status: 'Active', role: 'Support Specialist', email: 'viet.white2@example.com', age: 41, country: 'Canada', city: 'Montreal', salary: '$9,300' },
              { id: '3', name: 'Dorothy Thompson', status: 'Active', role: 'Software Engineer', email: 'dorothy.thompson3@example.com', age: 47, country: 'Japan', city: 'Kyoto', salary: '$4,200' },
              { id: '4', name: 'Minh Walker', status: 'Inactive', role: 'System Administrator', email: 'minh.walker4@example.com', age: 53, country: 'Germany', city: 'Frankfurt', salary: '$5,100' },
              { id: '5', name: 'Pamela Clark', status: 'Pending', role: 'Backend Developer', email: 'pamela.clark5@example.com', age: 59, country: 'UK', city: 'Manchester', salary: '$6,000' },
              { id: '6', name: 'Giang King', status: 'Active', role: 'DevOps Engineer', email: 'giang.king6@example.com', age: 65, country: 'USA', city: 'Seattle', salary: '$6,900' },
              { id: '7', name: 'Thomas Scott', status: 'Active', role: 'UI/UX Designer', email: 'thomas.scott7@example.com', age: 26, country: 'Singapore', city: 'Singapore', salary: '$7,800' },
              { id: '8', name: 'Viet Smith', status: 'Active', role: 'Data Scientist', email: 'viet.smith8@example.com', age: 32, country: 'France', city: 'Marseille', salary: '$8,700' },
              { id: '9', name: 'Dung Nguyen', status: 'Active', role: 'HR Specialist', email: 'dung.nguyen9@example.com', age: 38, country: 'Australia', city: 'Sydney', salary: '$9,600' },
              { id: '10', name: 'Huong Nguyen', status: 'Active', role: 'Marketing Specialist', email: 'huong.nguyen10@example.com', age: 44, country: 'Vietnam', city: 'Da Nang', salary: '$10,500' },
              { id: '11', name: 'Richard Moore', status: 'Active', role: 'Frontend Developer', email: 'richard.moore11@example.com', age: 50, country: 'Canada', city: 'Montreal', salary: '$11,400' },
              { id: '12', name: 'Sarah Perez', status: 'Active', role: 'Support Specialist', email: 'sarah.perez12@example.com', age: 56, country: 'Japan', city: 'Kyoto', salary: '$12,300' },
              { id: '13', name: 'Viet Martinez', status: 'Active', role: 'Software Engineer', email: 'viet.martinez13@example.com', age: 62, country: 'Germany', city: 'Frankfurt', salary: '$13,200' },
              { id: '14', name: 'Dung Wilson', status: 'Active', role: 'System Administrator', email: 'dung.wilson14@example.com', age: 23, country: 'UK', city: 'Manchester', salary: '$14,100' },
              { id: '15', name: 'Mark Harris', status: 'Active', role: 'Backend Developer', email: 'mark.harris15@example.com', age: 29, country: 'USA', city: 'Seattle', salary: '$15,000' },
              { id: '16', name: 'Viet Clark', status: 'Active', role: 'DevOps Engineer', email: 'viet.clark16@example.com', age: 35, country: 'Singapore', city: 'Singapore', salary: '$3,900' },
              { id: '17', name: 'Giang Smith', status: 'Active', role: 'UI/UX Designer', email: 'giang.smith17@example.com', age: 41, country: 'France', city: 'Marseille', salary: '$4,800' },
              { id: '18', name: 'Elizabeth Miller', status: 'Active', role: 'Data Scientist', email: 'elizabeth.miller18@example.com', age: 47, country: 'Australia', city: 'Sydney', salary: '$5,700' },
              { id: '19', name: 'Viet Jones', status: 'Active', role: 'HR Specialist', email: 'viet.jones19@example.com', age: 53, country: 'Vietnam', city: 'Da Nang', salary: '$6,600' },
              { id: '20', name: 'An Nguyen', status: 'Active', role: 'Marketing Specialist', email: 'an.nguyen20@example.com', age: 59, country: 'Canada', city: 'Montreal', salary: '$7,500' },
              { id: '21', name: 'Pamela Thomas', status: 'Active', role: 'Frontend Developer', email: 'pamela.thomas21@example.com', age: 65, country: 'Japan', city: 'Kyoto', salary: '$8,400' },
              { id: '22', name: 'An Smith', status: 'Active', role: 'Support Specialist', email: 'an.smith22@example.com', age: 26, country: 'Germany', city: 'Frankfurt', salary: '$9,300' },
              { id: '23', name: 'Tuan Smith', status: 'Active', role: 'Software Engineer', email: 'tuan.smith23@example.com', age: 32, country: 'UK', city: 'Manchester', salary: '$10,200' },
              { id: '24', name: 'Pamela Moore', status: 'Active', role: 'System Administrator', email: 'pamela.moore24@example.com', age: 38, country: 'USA', city: 'Seattle', salary: '$11,100' },
              { id: '25', name: 'Minh Walker', status: 'Active', role: 'Backend Developer', email: 'minh.walker25@example.com', age: 44, country: 'Singapore', city: 'Singapore', salary: '$12,000' },
              { id: '26', name: 'Pamela Nguyen', status: 'Active', role: 'DevOps Engineer', email: 'pamela.nguyen26@example.com', age: 50, country: 'France', city: 'Marseille', salary: '$12,900' },
              { id: '27', name: 'Minh Nguyen', status: 'Active', role: 'UI/UX Designer', email: 'minh.nguyen27@example.com', age: 56, country: 'Australia', city: 'Sydney', salary: '$13,800' },
              { id: '28', name: 'Pamela Nguyen', status: 'Active', role: 'Data Scientist', email: 'pamela.nguyen28@example.com', age: 62, country: 'Vietnam', city: 'Da Nang', salary: '$14,700' },
              { id: '29', name: 'Viet Martin', status: 'Active', role: 'HR Specialist', email: 'viet.martin29@example.com', age: 23, country: 'Canada', city: 'Montreal', salary: '$3,600' },
              { id: '30', name: 'Tuan Smith', status: 'Active', role: 'Marketing Specialist', email: 'tuan.smith30@example.com', age: 29, country: 'Japan', city: 'Kyoto', salary: '$4,500' },
              { id: '31', name: 'Giang Smith', status: 'Active', role: 'Frontend Developer', email: 'giang.smith31@example.com', age: 35, country: 'Germany', city: 'Frankfurt', salary: '$5,400' },
              { id: '32', name: 'Linh White', status: 'Active', role: 'Support Specialist', email: 'linh.white32@example.com', age: 41, country: 'UK', city: 'Manchester', salary: '$6,300' },
              { id: '33', name: 'Linh Thompson', status: 'Active', role: 'Software Engineer', email: 'linh.thompson33@example.com', age: 47, country: 'USA', city: 'Seattle', salary: '$7,200' },
              { id: '34', name: 'Viet Walker', status: 'Active', role: 'System Administrator', email: 'viet.walker34@example.com', age: 53, country: 'Singapore', city: 'Singapore', salary: '$8,100' },
              { id: '35', name: 'Minh Clark', status: 'Active', role: 'Backend Developer', email: 'minh.clark35@example.com', age: 59, country: 'France', city: 'Marseille', salary: '$9,000' },
              { id: '36', name: 'Linh King', status: 'Active', role: 'DevOps Engineer', email: 'linh.king36@example.com', age: 65, country: 'Australia', city: 'Sydney', salary: '$9,900' },
              { id: '37', name: 'Quynh Scott', status: 'Active', role: 'UI/UX Designer', email: 'quynh.scott37@example.com', age: 26, country: 'Vietnam', city: 'Da Nang', salary: '$10,800' },
              { id: '38', name: 'Yen Smith', status: 'Active', role: 'Data Scientist', email: 'yen.smith38@example.com', age: 32, country: 'Canada', city: 'Montreal', salary: '$11,700' },
              { id: '39', name: 'Tuan Nguyen', status: 'Active', role: 'HR Specialist', email: 'tuan.nguyen39@example.com', age: 38, country: 'Japan', city: 'Kyoto', salary: '$12,600' },
              { id: '40', name: 'Viet Nguyen', status: 'Active', role: 'Marketing Specialist', email: 'viet.nguyen40@example.com', age: 44, country: 'Germany', city: 'Frankfurt', salary: '$13,500' },
              { id: '41', name: 'Minh Moore', status: 'Active', role: 'Frontend Developer', email: 'minh.moore41@example.com', age: 50, country: 'UK', city: 'Manchester', salary: '$14,400' },
              { id: '42', name: 'Linh Perez', status: 'Active', role: 'Support Specialist', email: 'linh.perez42@example.com', age: 56, country: 'USA', city: 'Seattle', salary: '$3,300' },
              { id: '43', name: 'Yen Martinez', status: 'Active', role: 'Software Engineer', email: 'yen.martinez43@example.com', age: 62, country: 'Singapore', city: 'Singapore', salary: '$4,200' },
              { id: '44', name: 'Linh Wilson', status: 'Active', role: 'System Administrator', email: 'linh.wilson44@example.com', age: 23, country: 'France', city: 'Marseille', salary: '$5,100' },
              { id: '45', name: 'Quynh Harris', status: 'Active', role: 'Backend Developer', email: 'quynh.harris45@example.com', age: 29, country: 'Australia', city: 'Sydney', salary: '$6,000' },
              { id: '46', name: 'Linh Clark', status: 'Active', role: 'DevOps Engineer', email: 'linh.clark46@example.com', age: 35, country: 'Vietnam', city: 'Da Nang', salary: '$6,900' },
              { id: '47', name: 'Duc Smith', status: 'Active', role: 'UI/UX Designer', email: 'duc.smith47@example.com', age: 41, country: 'Canada', city: 'Montreal', salary: '$7,800' },
              { id: '48', name: 'Viet Miller', status: 'Active', role: 'Data Scientist', email: 'viet.miller48@example.com', age: 47, country: 'Japan', city: 'Kyoto', salary: '$8,700' },
              { id: '49', name: 'Linh Jones', status: 'Active', role: 'HR Specialist', email: 'linh.jones49@example.com', age: 53, country: 'Germany', city: 'Frankfurt', salary: '$9,600' },
              { id: '50', name: 'Viet Nguyen', status: 'Active', role: 'Marketing Specialist', email: 'viet.nguyen50@example.com', age: 59, country: 'UK', city: 'Manchester', salary: '$10,500' },
              { id: '51', name: 'Duc Thomas', status: 'Active', role: 'Frontend Developer', email: 'duc.thomas51@example.com', age: 65, country: 'USA', city: 'Seattle', salary: '$11,400' },
              { id: '52', name: 'Minh Smith', status: 'Active', role: 'Support Specialist', email: 'minh.smith52@example.com', age: 26, country: 'Singapore', city: 'Singapore', salary: '$12,300' },
              { id: '53', name: 'Linh Smith', status: 'Active', role: 'Software Engineer', email: 'linh.smith53@example.com', age: 32, country: 'France', city: 'Marseille', salary: '$13,200' },
              { id: '54', name: 'Duc Moore', status: 'Active', role: 'System Administrator', email: 'duc.moore54@example.com', age: 38, country: 'Australia', city: 'Sydney', salary: '$14,100' },
              { id: '55', name: 'Yen Walker', status: 'Active', role: 'Backend Developer', email: 'yen.walker55@example.com', age: 44, country: 'Vietnam', city: 'Da Nang', salary: '$15,000' },
              { id: '56', name: 'Duc Nguyen', status: 'Active', role: 'DevOps Engineer', email: 'duc.nguyen56@example.com', age: 50, country: 'Canada', city: 'Montreal', salary: '$3,900' },
              { id: '57', name: 'Yen Nguyen', status: 'Active', role: 'UI/UX Designer', email: 'yen.nguyen57@example.com', age: 56, country: 'Japan', city: 'Kyoto', salary: '$4,800' },
              { id: '58', name: 'Duc Nguyen', status: 'Active', role: 'Data Scientist', email: 'duc.nguyen58@example.com', age: 62, country: 'Germany', city: 'Frankfurt', salary: '$5,700' },
              { id: '59', name: 'Linh Martin', status: 'Active', role: 'HR Specialist', email: 'linh.martin59@example.com', age: 23, country: 'UK', city: 'Manchester', salary: '$6,600' },
              { id: '60', name: 'Linh Smith', status: 'Active', role: 'Marketing Specialist', email: 'linh.smith60@example.com', age: 29, country: 'USA', city: 'Seattle', salary: '$7,500' },
              { id: '61', name: 'Duc Smith', status: 'Active', role: 'Frontend Developer', email: 'duc.smith61@example.com', age: 35, country: 'Singapore', city: 'Singapore', salary: '$8,400' },
              { id: '62', name: 'Trang White', status: 'Active', role: 'Support Specialist', email: 'trang.white62@example.com', age: 41, country: 'France', city: 'Marseille', salary: '$9,300' },
              { id: '63', name: 'Trang Thompson', status: 'Active', role: 'Software Engineer', email: 'trang.thompson63@example.com', age: 47, country: 'Australia', city: 'Sydney', salary: '$10,200' },
              { id: '64', name: 'Linh Walker', status: 'Active', role: 'System Administrator', email: 'linh.walker64@example.com', age: 53, country: 'Vietnam', city: 'Da Nang', salary: '$11,100' }
            ]"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
