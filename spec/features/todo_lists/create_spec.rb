require 'spec_helper'

describe 'Creating todo lists' do 
  it "redirects to the todo list index page on success" do
    visit "/todo_items"
    click_link "New Todo item"
    expect(page).to have_content("New Todo Item")  

    # fill_in "Description", with: "This is what I'm doing today."
    # fill_in "Star", with: true
    # fill_in "Check", with: true
    # click_button "Create Todo item"
    
    expect(page).to have_content("Todo item was successfully created.")
  end
end

