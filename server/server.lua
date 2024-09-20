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

    -- Lógica de economia (verifique se o jogador tem dinheiro suficiente)
    local playerMoney = getPlayerMoney(player)  -- Defina essa função conforme necessário

    for _, vehicle in ipairs(vehicles) do
        if vehicle.id == vehicleId then
            if playerMoney >= vehicle.price then
                deductPlayerMoney(player, vehicle.price)  -- Defina essa função conforme necessário
                addVehicleToPlayerInventory(player, vehicleId, color)  -- Defina essa função conforme necessário
                TriggerClientEvent('notification', player, "Compra realizada com sucesso!")
            else
                TriggerClientEvent('notification', player, "Dinheiro insuficiente.")
            end
            break
        end
    end
end)

function getPlayerMoney(player)
    -- Retorne a quantidade de dinheiro do jogador
    return 100000 -- Exemplo: retorne um valor fixo
end

function deductPlayerMoney(player, amount)
    -- Deduzir dinheiro do jogador
end

function addVehicleToPlayerInventory(player, vehicleId, color)
    -- Adicionar o veículo ao inventário do jogador
end
