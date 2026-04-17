import requests
import sys
from datetime import datetime

class SadafalTechAPITester:
    def __init__(self, base_url="https://restaurant-ai-system.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}" if endpoint else self.base_url
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {response_data}")
                except:
                    print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        success, response = self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )
        return success

    def test_create_booking(self):
        """Test creating a booking"""
        test_booking = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": f"test{datetime.now().strftime('%H%M%S')}@example.com",
            "phone": "+91-9876543210",
            "restaurant_name": "Test Restaurant",
            "message": "This is a test booking"
        }
        
        success, response = self.run_test(
            "Create Booking",
            "POST",
            "bookings",
            200,
            data=test_booking
        )
        return response.get('id') if success else None

    def test_get_bookings(self):
        """Test retrieving bookings"""
        success, response = self.run_test(
            "Get Bookings",
            "GET",
            "bookings",
            200
        )
        return success

def main():
    print("🚀 Starting Sadafal Tech API Tests...")
    
    # Setup
    tester = SadafalTechAPITester()

    # Test root endpoint
    if not tester.test_root_endpoint():
        print("❌ Root endpoint failed")

    # Test booking creation
    booking_id = tester.test_create_booking()
    if not booking_id:
        print("❌ Booking creation failed")

    # Test getting bookings
    if not tester.test_get_bookings():
        print("❌ Get bookings failed")

    # Print results
    print(f"\n📊 Backend API Tests Summary:")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.tests_passed == tester.tests_run:
        print("✅ All backend tests passed!")
        return 0
    else:
        print("❌ Some backend tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())