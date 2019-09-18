require 'test_helper'

class DemoControllerTest < ActionDispatch::IntegrationTest
  # Default test
  test "should get index" do
    get demo_index_url
    assert_response :success
  end

  # Test components: https://www.rubydoc.info/gems/react-rails/2.6.0
  test 'assert_react_component' do
    get "/demo/index"
    assert_equal 200, response.status
    
    # Assert rendered react component and check the props
    assert_react_component "HelloWorld" do |props|
      assert_equal "Hello from react-rails component", props[:greeting]
      assert_equal "react-rails", props[:info][:name]
      assert_select "[class=?]", "hello-world"
    end
    
    # or just assert component rendered
    assert_react_component "HelloWorld"
  end
end
