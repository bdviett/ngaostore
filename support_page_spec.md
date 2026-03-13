# Ngao Store Support Page Generator
AI Implementation Spec

Goal:
Generate a complete support page `/support` for a Next.js SPA website.

Website: ngao.store

The page helps customers:
- identify their SIM type
- watch the correct guide video
- troubleshoot common issues
- check iPhone lock carrier
- contact support

The system should reduce customer support workload.

---

# 1. Tech Stack

Use the following stack:

- Next.js (App Router)
- React
- TypeScript
- TailwindCSS
- Client-side SPA behavior

No page reloads.

---

# 2. Page Route

Main route:

/support

Support sub states handled via query params:

/support?sim=bison-new
/support?sim=bison-pro
/support?sim=heicard
/support?sim=vipbs
/support?sim=db-dual-eid

/support?tool=carrier-check
/support?tool=troubleshoot

---

# 3. Folder Structure

Create the following structure:

app/
  support/
    page.tsx

components/
  support/
    SupportHeader.tsx
    SearchSupport.tsx
    SimGrid.tsx
    SimCard.tsx
    SimGuide.tsx
    CarrierCheck.tsx
    Troubleshoot.tsx
    ContactSupport.tsx

data/
  sim-guides.ts

types/
  sim.ts

---

# 4. Type Definitions

Create a type file:

types/sim.ts

Define:

```ts
export type SimGuide = {
  slug: string
  name: string
  video: string
  steps: string[]
  note?: string
}
5. SIM Data

Create file:

data/sim-guides.ts

Example data:

import { SimGuide } from "@/types/sim"

export const SIM_GUIDES: SimGuide[] = [
  {
    slug: "bison-new",
    name: "Bison New",
    video: "https://www.tiktok.com/@ngaostore86/video/7611761944265051413",
    steps: [
      "Xác định nhà mạng lock",
      "Mài mỏng SIM trước khi ghép",
      "Lắp SIM vào khay"
    ],
    note: "Nhà mạng trong video có thể khác máy bạn. Bạn gửi IMEI mình hỗ trợ kiểm tra hoặc vào trang sickw.com check nhà mạng nhé!"
  },

  {
    slug: "bison-pro",
    name: "Bison Pro",
    video: "https://www.tiktok.com/@ngaostore86/video/7612151840217566485",
    steps: [
      "Biết nhà mạng lock",
      "SIM ghép nằm dưới",
      "Luồn đuôi SIM xuống trước"
    ]
  },

  {
    slug: "heicard",
    name: "Heicard Pro GTR",
    video: "https://www.tiktok.com/@ngaostore86/video/7611792792167206165",
    steps: [
      "Xác định nhà mạng lock",
      "Dán SIM vào SIM ghép",
      "Lắp vào khay"
    ]
  },

  {
    slug: "vipbs",
    name: "VipBS",
    video: "https://www.tiktok.com/@ngaostore86/video/7611948374518009109",
    steps: [
      "Biết nhà mạng lock",
      "SIM ghép nằm dưới",
      "Luồn đuôi SIM xuống trước"
    ]
  },

  {
    slug: "db-dual-eid",
    name: "DB Dual EID",
    video: "https://www.tiktok.com/@ngaostore86/video/7611822262769224981",
    steps: [
      "Máy phải độ sẵn ổ 2 SIM",
      "Mài mỏng cả 2 SIM",
      "Dán SIM vào SIM ghép"
    ]
  }
]
6. UI Layout

The support page should contain:

Header

Search support

SIM selection grid

SIM guide view

Carrier check tool

Troubleshooting

Contact support

7. Support Header

Component:

SupportHeader

Display:

Ngao Store
Hỗ trợ ghép SIM iPhone Lock

Centered.

8. Search Support

Component:

SearchSupport

Input placeholder:

"Tìm loại sim hoặc lỗi (ví dụ: không có sóng)"

Basic filtering of SIM names.

9. SIM Grid

Component:

SimGrid

Display cards for each SIM.

Layout:

2 columns on mobile
3 columns on desktop.

Each card:

SIM name
Button: "Xem hướng dẫn"

Click:

router.push(/support?sim=${slug})

10. SIM Guide View

Component:

SimGuide

Display:

SIM Name
Video embed
Steps
Notes
Support tools

Video embed:

Use iframe for TikTok.

Steps displayed as numbered list.

11. Carrier Check Tool

Component:

CarrierCheck

UI:

Input field for IMEI.

Button:

Check

Mock result:

Carrier: AT&T

Future integration:

IMEI API.

12. Troubleshoot

Component:

Troubleshoot

Accordion UI.

Problems:

Không có sóng

Kiểm tra đúng nhà mạng

SIM có data chưa

Reset network

Không có 4G

Bật roaming

Reset network

Không kích hoạt được

Lắp lại SIM

Chọn lại nhà mạng

13. Contact Support

Component:

ContactSupport

Buttons:

Chat Zalo
Video Call

Example links:

https://zalo.me/your-id

14. Page Logic

page.tsx should:

read query params

Example:

const sim = searchParams.get("sim")
const tool = searchParams.get("tool")

Render conditionally:

sim → SimGuide

tool=carrier-check → CarrierCheck

tool=troubleshoot → Troubleshoot

default → SimGrid

15. Styling

Use TailwindCSS.

Requirements:

Mobile first.

Cards:

rounded-xl
shadow
padding

Spacing:

clean minimal UI similar to Apple support pages.

16. Performance

Use client components where necessary.

Avoid heavy libraries.

Lazy load video embed.

17. SEO

Add metadata:

title:

Hướng dẫn ghép SIM iPhone Lock | Ngao Store

description:

Trang hỗ trợ ghép SIM cho iPhone Lock.

18. Expected Result

After implementation:

Customers can:

select SIM
watch guide
fix problems
contact support

Support workload reduced significantly.