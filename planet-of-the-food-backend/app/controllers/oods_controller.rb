class OodsController < ApplicationController

    def index 
        render json: OodSerializer.new(Ood.all)
    end 

end
