class OodsController < ApplicationController

    def index 
        # oods = Ood.all
        # render json: oods, include: [:recipes]
        render json: OodSerializer.new(Ood.all)
    end 

end
