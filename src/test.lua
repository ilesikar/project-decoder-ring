/run local msg="LFM Y FOR X";local names = {"lfg", "LookingForGroup", "world"}; for k,v in pairs(names) do JoinChannelByName(v) end local channels = {1,2,4,5,6};for k,v in pairs(channels) do SendChatMessage(msg, "CHANNEL", GetDefaultLanguage(unit), v) end for k,v in pairs(names) do LeaveChannelByName(v) end