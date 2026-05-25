# SaaS Sales Dashboard

A fully interactive sales team dashboard built with React and TypeScript. Select any employee from the sidebar to view their complete performance overview, metrics, charts, KPIs, activity feed, and order history. When no employee is selected, the dashboard displays simplified team-level analytics.

**Live demo → https://mdsaasdashboard.netlify.app/**

## Screenshots
<img width="2560" height="1528" alt="saas-1" src="https://github.com/user-attachments/assets/32ab4e4b-5541-4c09-8c88-1bb6fb6af59f" />
<img width="2560" height="1528" alt="saas-2" src="https://github.com/user-attachments/assets/48986cf0-f704-49e6-bd83-c4012262336e" />


## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Component Architecture](#component-architecture)
- [Utility Functions](#utility-functions)
- [Data Layer](#data-layer)
- [Deployment](#deployment)
- [Contact](#Contact)

## Overview

This project was built to demonstrate scalable frontend architecture using React and TypeScript. The dashboard has two views:
 
**Default view (no employee selected)**  
      team-level metrics including total sales, order counts, average performance score, leaderboard rankings, and a rep status indicator.
 
**Employee view (employee selected)** 
      individual metrics, quarterly performance vs team average via Recharts line chart, orders by status donut chart, KPI progress bars covering sales target, attendance, performance score and client satisfaction, a recent activity feed, and an orders table.


## Features

- Employee sidebar with live seach and on track/needs attention filter
- Click to select employee drives all right-panel data
- Team aggregate view when no employee is selected
- Recharts line chart comparing individual vs teeam quarterly performance
- SVG donut chart for order status breakdown
- KPI progress bar with color coded thresholds
- Orders table with status badges
- Leaderboard ranked by monthly sales
- Reuseable base 'Card' Component system - all components compose from one shell
- Typescript interfaces for all props, data, and component contracts
- Responsive layout using Flexbox

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Styling | Bootstrap 5, custom CSS, Flexbox |
| Icons | Font Awesome |
| Charts | Recharts |
| Markup | HTML5 |
| Build tool | Vite |
| Deployment | Netlify |
| Version control | Git / GitHub |


## Project Structure

```
src/
  Components/
    Card (shell)/
      Card.tsx                  ← base card component used by all widgets
      Card.css
    Card Types/
      MetricCard/
        MetricCard.tsx
        MetricCard.css
      Line Chart/
        LineChart.tsx
        LineChart.css
      DonutChart/
        DonutChart.tsx
        DonutChart.css
    Employee Header/
      Topbar.tsx
      Topbar.css
    Sidebar/
      Sidebar.tsx
      Sidebar.css
    EmployeeOverview.tsx        ← parent of all employee-specific widgets
    DefaultDashboard.tsx        ← team-level view when no employee selected
  Data/
    EmployeesDataList.ts        ← employee data array
  Interfaces/
    Interfaces.ts               ← shared TypeScript interfaces
    Employees.ts                ← Employee type definition
  Utils/
    employeeUtils.ts            ← shared utility and aggregation functions
  App.tsx
  App.css
  main.tsx
  index.css
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
#Clone the repository
git clone https://github.com/mdodd8/saas-dashboard.git

# Navigate into the project
cs saas-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev

```
### Build for Production

```bash
npm run build
```

## Component Architecture

The dashboard follows a unidirectional data flow pattern. State lives at the top and flows down.

 **Key pattern `Card` as a base shell:**
 
Every widget uses the base `Card` component for its outer shell. `Card` handles the title, optional action button if applicable, padding, border, and border radius. Specialized cards like `MetricCard`, `DonutChart`, and `LineChartCard` render their content inside `Card` as children. The app level never calls `Card` directly.

```tsx
// MetricCard internally wraps Card
function MetricCard({ label, value, icon, subtext, colorClass}: MetricCardProps) {
  return (
    <Card title={label}>
            <p className="metric-label">{label}</p>
            <p className="metric-value">{value}</p>
        </Card>
  );
}
 
// App level only sees MetricCard
<MetricCard label="Monthly Sales" value="$84,210" delta={{ value: '+12.4%', direction: 'up' }} />
```

**State management:**

`selectedEmployee` state lives in `App.tsx`. The sidebar receives `onSelect` as a callback and fires it when an employee is clicked. `EmployeeOverview` receives the selected employee as a single prop and fans the data out to its children. No prop drilling beyond one level.

```tsx
// App.tsx
const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
 
<>
            <Sidebar
                employees={employeesDataList}
                selectedId={selectedEmployee?.id ?? null}
                onSelect={setSelectedEmployee}
            />
            <div className="main" id="main">
                {selectedEmployee
                    ? <EmployeeOverview employee={selectedEmployee} />
                    : <EmptyDashboard  />
                }
            </div>
        </>
```
## Utility Functions

All shared logic lives in `src/Utils/employeeUtils.ts`. Functions are reusable across components.

| Function | Description |
|---|---|
| `isOnTrack(employee)` | Returns true if sales ≥ 70% of target |
| `getInitials(name)` | Returns initials from a full name string |
| `buildQuarterlyData(individual, team)` | Zips two number arrays into Recharts-ready data points |
| `getTotalSales(employees)` | Sums sales across all employees |
| `getTotalOrders(employees)` | Sums ordersCompleted across all employees |
| `getAveragePerformance(employees)` | Returns rounded mean performance score |
| `getAverageAttendance(employees)` | Returns rounded mean attendance score |
| `getAverageSatisfaction(employees)` | Returns rounded mean satisfaction score |
| `getOnTrackEmployees(employees)` | Filters to employees meeting the 70% threshold |
| `getNeedsAttentionEmployees(employees)` | Filters to employees below the 70% threshold |
| `getLeaderboard(employees)` | Returns employees sorted by sales descending |
| `getTotalFulfilled(employees)` | Sums fulfilled orders across all employees |
| `getTotalPending(employees)` | Sums pending orders across all employees |
| `getTotalReturned(employees)` | Sums returned orders across all employees |
| `getTeamQuarterly(employees)` | Aggregates quarterly arrays into team totals |
| `formatCurrency(value)` | Formats a number as `$1,234` |
| `formatPercent(value, total)` | Returns a rounded percentage |

## Data Layer

Employee data lives in `src/Data/EmployeesDataList.ts` as a typed array of `Employee` objects. The employee interface is defined in `src/Interfaces/Employees.ts`.
To swap in real API data, replace the static array in `EmployeesDataList.ts` with a `useEffect` fetch.  All components will update automatically since they receive data via props.

## Deployment 

Deployed via [Netlify](https://netlify.com) with continuous deployment from the `main` branch.

To deploy your own version: 
1. Fork this repository
2. Connect to Netlify -> New site from Git
3. set build command: 'npm run build'
4. set publish directory: 'dist'
5. Deploy

## Contact

Frontend Developer · UI/UX Engineer · Remote
 
- Email: [meldodd8@yahoo.com](mailto:meldodd8@yahoo.com)
- Portfolio: [melissadodd.netlify.app](https://melissadodd.netlify.app)
- LinkedIn: [linkedin.com/in/melissa-dodd-281971383](https://linkedin.com/in/melissa-dodd-281971383)


*Built with React, TypeScript, Bootstrap, Recharts, and Font Awesome · Deployed on Netlify*
