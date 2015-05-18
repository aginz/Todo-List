class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :description
      t.boolean :star
      t.boolean :check

      t.timestamps null: false
    end
  end
end
