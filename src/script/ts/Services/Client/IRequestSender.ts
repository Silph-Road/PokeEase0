interface IRequestSender {
    sendGetConfigRequest();
    sendPokemonListRequest();
    sendEggsListRequest();
    sendInventoryListRequest();
    sendPlayerStatsRequest();
    sendGetPokemonSettingsRequest();
    sendTransferPokemonRequest(pokemonId: string);
    sendEvolvePokemonRequest(pokemonId: string);
    sendHumanSnipePokemonRemoveRequest(pokemonId: string);
    sendHumanSnipePokemonSnipeRequest(pokemonId: string);
    sendHumanSnipPokemonListUpdateRequest();
    sendRecycleRequest(itemId: number, count: number);
    sendMoveToRequest(lat: number, lng: number, teleport: boolean)
    currentBotFamily: BotFamily;
}