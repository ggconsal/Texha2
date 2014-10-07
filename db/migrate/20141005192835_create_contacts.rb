class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :nombre
      t.string :email
      t.string :subject
      t.text :mensaje
      t.boolean :suscribir
      t.boolean :autorizado

      t.timestamps
    end
  end
end
