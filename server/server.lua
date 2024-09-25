local vehicles = require('vehicle_data')

RegisterNetEvent('getVehicles')
AddEventHandler('getVehicles', function()
    local source = source
    TriggerClientEvent('vehicleList', source, vehicles)
end)

RegisterNetEvent('purchaseVehicle')
AddEventHandler('purchaseVehicle', function(data)
    local player = source
    local vehicleId = data.vehicleId
    local color = data.color


    local playerMoney = getPlayerMoney(player)  

    for _, vehicle in ipairs(vehicles) do
        if vehicle.id == vehicleId then
            if playerMoney >= vehicle.price then
                deductPlayerMoney(player, vehicle.price)  
                addVehicleToPlayerInventory(player, vehicleId, color)  
                TriggerClientEvent('notification', player, "Compra realizada com sucesso!")
            else
                TriggerClientEvent('notification', player, "Dinheiro insuficiente.")
            end
            break
        end
    end
end)

function getPlayerMoney(player)
  
    return 100000 
end

function deductPlayerMoney(player, amount)
 
end

function addVehicleToPlayerInventory(player, vehicleId, color)

end
