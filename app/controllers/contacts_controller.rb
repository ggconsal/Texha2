class ContactsController < ApplicationController

  respond_to :html, :js

  def index
    @contacts = Contact.all
    @contact = Contact.new
  end

  def show
    @contact = Contact.find(params[:id])
  end

  def new
    @contact = Contact.new
  end

  def create
    @contacts = Contact.all
    @contact = Contact.create(contact_params)

    Notifier.email_message(@contact.subject, @contact.mensaje, @contact.email, @contact.nombre).deliver
  end

  def edit
    @contact = Contact.find(params[:id])
  end

  def update
    @contacts = Contact.all
    @contact = Contact.find(params[:id])

    @contact.update_attributes(contact_params)
  end

  def delete
    @contact = Contact.find(params[:id])
  end

  def destroy
    @contacts = Contact.all
    @contact = Contact.find(params[:id])

    @contact.destroy
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def contact_params
      params.require(:contact).permit(:nombre, :email, :subject, :mensaje, :suscribir, :autorizado)
    end
end

#def index
#  @contacts = Contact.all
#end

# GET /contacts/1
# GET /contacts/1.json
#def show
#end

# GET /contacts/1/edit
#def edit
#end

#  before_action :all_contact, only: [:index, :create, :update, :destroy]
#  before_action :set_contact, only: [:edit, :update, :destroy]

#    def all_contact
#      @contacts = Contact.all
#    end

    # Use callbacks to share common setup or constraints between actions.
#    def set_contact
#      @contact = Contact.find(params[:id])
#    end


