# Architecture

## Views:

- _**NavBarView**_
  - Responsibility: This component remains static on all pages and displays Accessitech’s branding and tabs navigating to other screens.
  - Resides: Client-side only
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
    - Contains the _NavBarView_
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
  - Responsibility: Takes in information about organization being submitted, including: name, type, address, phone number, email, device needs, donation goal, description, and mission statement
  - Resides: Client-side only
  - Other components:
    - Communicates with the _OrganizationController_ to pass through submitted form and its responses from user
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
  - Resides: Client-side and server-side
  - Other components:
    - Communicates with the _OrganizationController_ to pull information on which organizations to display from the OrganizationModel
    - Communicates with the _OrganizationController_ to filter which organizations will be displayed to the user
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
  - Responsibility: Displays information about a specific organization to the user on the browse page
  - Resides: Client-side only
  - Other components:
    - Communicates with _OrganizationController_ to pull information about the organization from the _OrganizationModel_ to display to the user
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
  - Responsibility: Displays information about a specific organization to the user
  - Resides: Client-side only
  - Other components:
    - Communicates with _OrganizationController_ to pull information about the organization from the _OrganizationModel_ to display to the user
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
  - Responsibility: Takes in information about the donor such as first and last name, phone number, and address. It also takes in information about types of devices the donor is donating and the quantity
  - Resides: Client-side only
  - Other components:
    - Communicates with the _DonationController_ to submit completed donation forms to be stored in the _DonationModel_
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

## Models:

- _**OrganizationModel**_
  - Responsibility: Stores data about submitted organizations. Data includes organization name, type, address, phone number, email, device needs, donation goal, short description, and mission statement
  - Resides: Server-side only
  - Other components:
    - Communicates with the _OrganizationController_ to store all submitted organizations and respective data
    - Communicates with the _OrganizationController_ to send data for the appropriate organizations to be displayed to the user
    - Communicates with the _DonationController_ to update an organization’s donation goal percentage (donations received / donation goal)
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
  - Responsibility: Stores data from submitted donation forms. Data includes the donor’s first and last name, phone number, address, device types, and quantity.
  - Resides: Server-side only
  - Other components:
    - Communicates with the _DonationController_ to store all submitted donations and respective data
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

## Controllers:

- _**DonationController**_
  - Responsibility: Submits completed donation forms to be stored, and updates donation goal percentages.
  - Resides: Client-side and server-side
  - Other components:
    - Communicates with _DonorDeviceModel_ to to store all submitted donations and respective data, including: donor’s first and last name, phone number, address, device types, and quantity
    - Communicates with _OrganizationModel_ to update an organization’s donation goal percentage (donations received / donation goal)
  - Stub:
  ```
  // Store inputted responses in DonationModel
  function saveDonation(response) {
	DonorDeviceModel.add(fName)
	DonorDeviceModel.add(lName)
	DonorDeviceModel.add(donorPhone)
	DonorDeviceModel.add(donorAddress)
	DonorDeviceModel.add(deviceType) // from formDropDown
	DonorDeviceModel.add(quantity)
	}
    }
    
    function updateDonationCount(organization) {
    	// update organization's donation count
    }

  ```

- _**OrganizationController**_
  - Responsibility: Submits completed organization forms to be stored, filters and retrieves organization data to be displayed
  - Resides: Client-side and server-side
  - Other components
    - Communicates with _OrganizationModel_ to store all submitted organizations and respective data, including: organization name, type, address, phone number, email, device needs, donation goal, description, and mission statement.
    - Communicates with _OrganizationModel_ to retrieve data for appropriate organizations to be displayed to the user
    - Communicates with _BrowseOrganizationsView_ to filter which organizations to display to user
    - Communicates with _BrowseOrganizationsView_ to display appropriate organizations to the user
    - Communicates with OrganizationCardView to display information about a specific organization to the user
    - Communicates with IndividualOrganizationView to display information about a specific organization to the user

  - Stub:
  ```
	// Store the inputted responses in OrganizationModel
	function saveOrganizaiton(response) {
		OrganizationModel.add(orgName)
		OrganizationModel.add(orgType)
		OrganizationModel.add(orgAddress)
		OrganizationModel.add(orgPhone)
		OrganizationModel.add(orgEmail)
		OrganizationModel.add(orgNeeds) // from formDropDown
		OrganizationModel.add(orgGoal)
		OrganizationModel.add(orgDescription)
	}

	// pull organizations from OrganizationModel to display
	function displayOrgs() {
	for organization in OrganizationModel {
		organizations.add(OrganizationCard(organization));
		}
	}

  ```
