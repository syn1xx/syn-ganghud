local QBCore = exports['qb-core']:GetCoreObject()
local PlayerData = QBCore.Functions.GetPlayerData()


RegisterNUICallback('updateUI', function(data, cb)
  local gangName = PlayerData.gang.label
  local rankName = PlayerData.gang.grade.name or 'none'

  SendNUIMessage({
    type = 'updateUI',
    gangName = gangName,
    rankName = rankName
  })


  cb('ok')
end)

function ShowGangUI()
  SetNuiFocus(false, false)
  SendNUIMessage({ type = 'showUI' })
end

function HideGangUI()
  SetNuiFocus(false, false)
  SendNUIMessage({ type = 'hideUI' })
end

RegisterCommand('ganghud', function()
  local gang = PlayerData.gang.grade.name or 'none'
  print(gang)

  ShowGangUI()
end)

RegisterCommand('ganghudoff', function()
  HideGangUI()
end)

function updateGangUI()

  TriggerServerEvent('updateGangUI')

  SetTimeout(10000, updateGangUI)
end

AddEventHandler('playerSpawned', function()
  ShowGangUI()

  updateGangUI()
end)
