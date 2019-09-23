require 'test_helper'

class FccControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fcc_index_url
    assert_response :success
  end

  test "should get components" do
    get fcc_components_url
    assert_response :success
  end

  test "should get props" do
    get fcc_props_url
    assert_response :success
  end

  test "should get states" do
    get fcc_states_url
    assert_response :success
  end

  test "should get life_cycle" do
    get fcc_life_cycle_url
    assert_response :success
  end

  test "should get inline_styles" do
    get fcc_inline_styles_url
    assert_response :success
  end

  test "should get advanced" do
    get fcc_advanced_url
    assert_response :success
  end

end
