require "test_helper"

class HooksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hooks_index_url
    assert_response :success
  end
end
