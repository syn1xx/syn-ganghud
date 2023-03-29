local QBCore = exports['qb-core']:GetCoreObject()
RegisterServerEvent('updateGangUI')
AddEventHandler('updateGangUI', function()
  local player = source
  local gangName = QBCore.Functions.GetPlayerData(player).gang.label
  local rankName = QBCore.Functions.GetPlayerData(player).gang.grade.name or 'none'

  TriggerClientEvent('updateGangUI', player, gangName, rankName)
end)
