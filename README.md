# saas-vendor-management-ui

use chakra ui  and icons make best design A landing page for a SaaS business - vendor management -add button , tables  action - view ,edit ,delete -- inputs fileds - Input Fields for Invoice Verification Form
Field Name	Input Type	Description	Validation Rules
Invoice Number	Text	Unique identifier for the invoice	Required, Unique, Max length: 20
PO Number	Text	Purchase Order number linked to the invoice	Required, Max length: 20, Must exist in database
Invoice Date	Date	Date the invoice was issued	Required
Vendor Number	Text	Unique identifier for the vendor	Required, Max length: 20, Must exist in database
Total Amount	Number	Total amount on the invoice	Required, Min: 0
Payment Terms	Text	Payment terms for the invoice	Required, Max length: 50
Status	Dropdown/Select	Status of the invoice	Required, Options: Pending, Approved, Rejected      

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/saas-vendor-management-ui.git
cd saas-vendor-management-ui
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
