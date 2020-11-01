# Architecture

## Views:

- NavBarView
  - Responsibility: This component remains static on all pages and displays Accessitech’s branding and tabs navigating to other screens.
  - Resides: Client-side only
  - Other components:
    - NavBarView communicates with UserController to determine user input, and alters display depending on that.
  - Stub:
    ```
    insert code
    ```

- LandingPageView
  - Responsibility: Displays information and relevant user actions. All actions navigate to separate screens.
  - Resides: Client-side only
  - Other components:
    - Contains the NavBarView
    - Does not interact with any controllers
  - Stub:
  ```
  insert code
  ```

- SubmitOrganizationFormView
  - Responsibility: Takes in information from organization about name of organization, type of organization, address, phone number, email, device needs, donation goal, short description of organization, and organization mission statement
  - Resides: Client-side only
  - Other components:
    - SubmitOrganizationForm can ask the OrganizationModel to store the information it is taking in
  - Stub:
  ```
  insert code
  ```

- BrowseOrganizationsView
  - Responsibility: Displays organizations that the user can donate to
  - Resides: Client-side only
  - Other components:
    - Communicates with DropDownController to filter organization cards
  - Stub:
  ```
  insert code
  ```
    
- OrganizationCardView
  - Responsibility: Views and displays information about an organization to the user
  - Resides: Client-side and server-side
  - Other components:
    - OrganizationCardView views information that OrganizationModel stores such as organization name, type of organization, and short description of organization.
    - OrganizationCardView displays information that OrganizationModel stores such as organization name, type of organization, and short description of organization.
  - Stub:
  ```
  insert code
  ```

- IndividualOrganizationView
  - Responsibility: Views and displays information about an organization to the user
  - Resides: Client-side only
  - Other components:
    - IndividualOrganizationView displays information that OrganizationModel stores such as organization name, devices needed, mission statement, phone number, email, and address.
  - Stub:
  ```
  insert code
  ```

- DonationFormView
  - Responsibility: take in information about the donor such as first and last name, phone number, and address. It also takes in information about types of devices the donor is donating and the quantity
  - Resides: Client-side only
  - Other components:
    - DonationForm can ask the DonorDeviceModel to store information about the donor’s first and last name, phone number, address, types of device and quantity of each device type being donated
  - Stub:
  ```
  insert code
  ```

- FormDropDownView
  - Responsibility: Displays a list of organization types and device types
  - Resides: Client-side only
  - Other components:
    - FormDropDownView writes information to the DropDownController
  - Stub:
  ```
  insert code
  ```

- FilterDropDownView
  - Responsibility: Displays options for filtering and ordering search results
  - Resides: Client-side only
  - Other components:
    - FilterDropDownView communicates with the DropDownController to change the information displayed to the user
  - Stub:
  ```
  insert code
  ```

## Models:

- OrganizationMode
  - Responsibility: storing data from organization donation goal form such as name of organization, type of organization, address, phone number, email, device needs, donation goal, short description of organization, and organization mission statement
  - Resides: Server-side only
  - Other components:
    - OrganizatonModel stores information that SubmitOrganizationFormView takes in about an organization
  - Stub:
  ```
  insert code
  ```

- DonorDeviceModel
  - Responsibility: Stores data from the donation form such as first and last name, phone number, address, types of devices they are donating and the quantity of each being donated.
  - Resides: Server-side only
  - Other components:
    - DonorDeviceModel stores information that DonationFormView takes in about the donor and the devices they want to donate
  - Stub:
  ```
  insert code
  ```

## Controllers

- DonationController
  - Responsibility: communicates with donation device form to write responses to the questions
  - Resides: Client-side
  - Other components:
    - DonorController communicates with DonationFormView to submit information about their first and last name, phone number, address, types of devices they are donating and the quantity
  - Stub:
  ```
  insert code
  ```

- OrganizationController
  - Responsibility: communicates with organization goal form to write responses to the questions
  - Resides: Client-side
  - Other components
    - OrganizationController communicates with SubmitOrganizationFormView to submit information about name of organization, type of organization, address, phone number, email, device needs, donation goal, short description of organization, and organization mission statement
  - Stub:
  ```
  insert code
  ```

- DropDownController
  - Responsibility: communicates with dropdown menus to change what information is displayed to the user or passed to their respective model
  - Resides: Client-side
  - Other components:
    - DropDownController asks the FormDropDownView to write information about organization type or device type
    - DropDownController asks the FilterDropDownView to display only organization cards that meet the parameters selected
  - Stub:
  ```
  insert code
  ```
