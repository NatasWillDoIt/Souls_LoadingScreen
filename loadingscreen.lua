-- Client-side loading screen script
local musicVolume = 0.3 -- Adjust this value (0.0 to 1.0) for music volume

-- Music configuration
local music = {
    --{url = "https://www.youtube.com/watch?v=YOUR_MUSIC_ID", title = "Background Music"},
    {url = "https://www.youtube.com/watch?v=YOUR_MUSIC_ID", title = "Background Music"},
    -- Add more tracks as needed
}

-- Links configuration
local links = {
    {text = "Discord", url = "https://discord.gg/YOUR_DISCORD"},
    {text = "Website", url = "https://your-website.com"},
    {text = "Rules", url = "https://your-website.com/rules"}
}

-- Handle loading screen display
CreateThread(function()
    -- Load background music
    SendNUIMessage({
        transactionType = 'playMusic',
        musicURL = music[1].url,
        musicVolume = musicVolume
    })
    
    -- Display loading screen until game is ready
    while not NetworkIsSessionStarted() do
        Wait(500)
    end
    
    -- Hide loading screen when ready
    SendNUIMessage({
        transactionType = 'hideLoadingScreen'
    })
end)