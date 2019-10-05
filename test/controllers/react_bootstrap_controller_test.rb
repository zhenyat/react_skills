require 'test_helper'

class ReactBootstrapControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get react_bootstrap_index_url
    assert_response :success
  end

end
