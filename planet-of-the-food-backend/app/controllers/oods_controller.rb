class OodsController < ApplicationController

    def index 
        render json: OodSerializer.new(Ood.all)
    end 

    def create 
        ood = Ood.new(ood_params)
        if ood.save
            render json: OodSerializer.new(ood)
        else 
            render json: {message: list.errors.full_messages}
        end 
    end 

    def destroy
        ood = Ood.find_by(id: params[:id])
        ood.destroy
        render json: {message: "success"}
    end 

    private 

    def ood_params
        params.require(:ood).permit(:name)
    end 

end
