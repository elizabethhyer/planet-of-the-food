class OodsController < ApplicationController

    def index 
        render json: OodSerializer.new(Ood.all)
    end 

    def create 
        ood = Ood.create(ood_params)
        render json: OodSerializer.new(ood)
    end 

    private 

    def ood_params
        params.require(:ood).permit(:name)
    end 

end
