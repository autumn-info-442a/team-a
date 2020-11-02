# Architecture

## Views:

- _**NavBarView**_
  - Responsibility: This component remains static on all pages and displays Accessitech’s branding and tabs navigating to other screens.
  - Resides: Client-side only
  - Other components:
    - NavBarView communicates with UserController to determine user input, and alters display depending on that.
  - Stub:
    ```
    class NavBar extends Component() {
      // TODO Implement actual component
      render() {
        return (
          <NavBar>
            <div><Link>Home</Link></div>
            <div><Link>Browse</Link></div>
            <div><Link>Submit</Link></div>
          </NavBar>
        )
      }
    }
    ```

- _**LandingPageView**_
  - Responsibility: Displays information and relevant user actions. All actions navigate to separate screens.
  - Resides: Client-side only
  - Other components:
    - Contains the NavBarView
    - Does not interact with any controllers
  - Stub:
    ```
    class LandingPage extends Component() {
	    // TODO Implement actual component
	    render() {
		    return (
		      <NavBar></NavBar>
		    )
	    }
    }
    ```

- _**SubmitOrganizationFormView**_
  - Responsibility: Takes in information from organization about name of organization, type of organization, address, phone number, email, device needs, donation goal, short description of organization, and organization mission statement
  - Resides: Client-side only
  - Other components:
    - SubmitOrganizationForm can ask the OrganizationModel to store the information it is taking in
  - Stub:
  ```
  class submitOrganizationForm extends Component() {
	// TODO Implement actual component
    render() {
      return (
        <NavBar></NavBar>
        <div>
          // input information about organization
          <input></input>

          // select organization type
          <FormDropDown></FormDropDown>
        </div>
      )
    }
  }

  ```

- _**BrowseOrganizationsView**_
  - Responsibility: Displays organizations that the user can donate to
  - Resides: Client-side only
  - Other components:
    - Communicates with DropDownController to filter organization cards
  - Stub:
    ```
    class BrowseOrganizations extends Component() {
    // TODO Implement actual component
      render() {
        return (
          <NavBar></NavBar>
          <div>
          // For filtering results
          <FilterDropDown></FilterDropDown>

          organizations.map(() => {
            list.add(organization)
          })
          </div>
        )
      }
    }
    ```
    
- _OrganizationCardView_
  - Responsibility: Views and displays information about an organization to the user
  - Resides: Client-side and server-side
  - Other components:
    - OrganizationCardView views information that OrganizationModel stores such as organization name, type of organization, and short description of organization.
    - OrganizationCardView displays information that OrganizationModel stores such as organization name, type of organization, and short description of organization.
  - Stub:
  ```
  class OrganizationCard extends Component() {
	// TODO Implement actual component
    render() {
      return {
        <p>
          Name: OrganizationModel.getName();
          Type: OrganizationModel.getType();
          Address: OrganizationModel.getAddress();
          Phone: OrganizationModel.getPhone();
          Email: OrganizationModel.getEmail();
          Needs: OrganizationModel.getNeeds();
          Goal: OrganizationModel.getGoal();
          Description: OrganizationModel.getDescription();
        </p>
      }
    }
  }

  ```

- _IndividualOrganizationView_
  - Responsibility: Views and displays information about an organization to the user
  - Resides: Client-side only
  - Other components:
    - IndividualOrganizationView displays information that OrganizationModel stores such as organization name, devices needed, mission statement, phone number, email, and address.
  - Stub:
  ```
  class OrganizationCard extends Component() {
	// TODO Implement actual component
    render() {
      return {
        <NavBar></NavBar>
        <p>
          Name: OrganizationModel.getName();
          Type: OrganizationModel.getType();
          Address: OrganizationModel.getAddress();
          Phone: OrganizationModel.getPhone();
          Email: OrganizationModel.getEmail();
          Needs: OrganizationModel.getNeeds();
          Goal: OrganizationModel.getGoal();
          Description: OrganizationModel.getDescription();
        </p>
      }
    }
  }
  ```

- _**DonationFormView**_
  - Responsibility: take in information about the donor such as first and last name, phone number, and address. It also takes in information about types of devices the donor is donating and the quantity
  - Resides: Client-side only
  - Other components:
    - DonationForm can ask the DonorDeviceModel to store information about the donor’s first and last name, phone number, address, types of device and quantity of each device type being donated
  - Stub:
  ```
  class DonationForm extends Component() {
    // TODO Implement actual component
    render() {
      return (
        <NavBar></NavBar>
        <div>
          // input information about device being donated
          <input></input>

          // select device type
          <FormDropDown></FormDropDown>
        </div>
      )
    }
  }

  ```

- _**FormDropDownView**_
  - Responsibility: Displays a list of organization types and device types
  - Resides: Client-side only
  - Other components:
    - FormDropDownView writes information to the DropDownController
  - Stub:
  ```
  class FormDropDown extends Component() {
	// TODO Implement actual component
    render() {
      return (
    <input></input>
      )
    }
  }

  ```

- _**FilterDropDownView**_
  - Responsibility: Displays options for filtering and ordering search results
  - Resides: Client-side only
  - Other components:
    - FilterDropDownView communicates with the DropDownController to change the information displayed to the user
  - Stub:
  ```
  class FilterDropDown extends Component() {
	// TODO Implement actual component
    render() {
      return (
        <input></input>
      )
    }
  }
  ```

## Models:

- _**OrganizationMode**_
  - Responsibility: storing data from organization donation goal form such as name of organization, type of organization, address, phone number, email, device needs, donation goal, short description of organization, and organization mission statement
  - Resides: Server-side only
  - Other components:
    - OrganizatonModel stores information that SubmitOrganizationFormView takes in about an organization
  - Stub:
  ```
  class Organization extends Component {
  //TO-DO: Implement actual component
    constructor(props) {
      super(props);
      this.state = {
    // information from submitOrganizationForm
        orgName = ‘University of Washington’
    orgType = ‘Education’
    orgAddress = ‘Seattle WA 98105’
    orgPhone = ‘2061231234’
    orgEmail = ‘uw@uw.edu’
    orgNeeds = [‘laptops’] // from formDropDown
    orgGoal = 10000
    orgDescription = ‘go huskies’
      }
    }
  }
  ```

- _**DonorDeviceModel**_
  - Responsibility: Stores data from the donation form such as first and last name, phone number, address, types of devices they are donating and the quantity of each being donated.
  - Resides: Server-side only
  - Other components:
    - DonorDeviceModel stores information that DonationFormView takes in about the donor and the devices they want to donate
  - Stub:
  ```
  class DonorDevice extends Component {
  //TO-DO: Implement actual component
    constructor(props) {
      super(props);
      this.state = {
    // information from donationForm
        donation = []
    fName = []
    lName = []
    donorPhone = []
    deviceType = []
    quantity = []
      }
    }
  }

  ```

## Controllers

- _**DonationController**_
  - Responsibility: communicates with donation form to write responses to the questions
  - Resides: Client-side
  - Other components:
    - DonorController communicates with DonationFormView to submit information about their first and last name, phone number, address, types of devices they are donating and the quantity
  - Stub:
  ```
    // Handles storing information inputted by user through the DonationForm
  Class DonationController extends Component() {
    // Stores the inputted responses to the DonorDeviceModel
    function fillDonationForm(response) {
      DonorDeviceModel.add(fName)
      DonorDeviceModel.add(lName)
      DonorDeviceModel.add(donorPhone)
      DonorDeviceModel.add(donorAddress)
      DonorDeviceModel.add(deviceType) // from formDropDown
      DonorDeviceModel.add(quantity)
    }
  }

  ```

- _**OrganizationController**_
  - Responsibility: communicates with organization goal form to write responses to the questions
  - Resides: Client-side
  - Other components
    - OrganizationController communicates with SubmitOrganizationFormView to submit information about name of organization, type of organization, address, phone number, email, device needs, donation goal, short description of organization, and organization mission statement
  - Stub:
  ```
  // Handles storing information inputted by user through the SubmitOrganizationForm
  Class DonationController extends Component() {

    // Stores the inputted responses to the OrganizationModel
    function fillOrganizaitonForm(response) {
      OrganizationModel.add(orgName)
      OrganizationModel.add(orgType)
      OrganizationModel.add(orgAddress)
      OrganizationModel.add(orgPhone)
      OrganizationModel.add(orgEmail)
      OrganizationModel.add(orgNeeds) // from formDropDown
      OrganizationModel.add(orgGoal)
      OrganizationModel.add(orgDescription)
    }

    Function fillDisplay() {
      // TODO replace with actual algorithm
      For organization in OrganizationModel {
        Organizations.add(OrganizationCard(organization));
      }
    }
  }
  ```

- _**DropDownController**_
  - Responsibility: communicates with dropdown menus to change what information is displayed to the user or passed to their respective model
  - Resides: Client-side
  - Other components:
    - DropDownController asks the FormDropDownView to write information about organization type or device type
    - DropDownController asks the FilterDropDownView to display only organization cards that meet the parameters selected
  - Stub:
  ```
  // Handles storing information inputted by user through the dropdown menus
  Class DonationController extends Component() {
    // TODO Implement actual component
  }
  ```
