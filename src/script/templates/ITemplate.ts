class app{
     static templates: ITemplate;
}
interface ITemplate{
    PokemonInfoPopup(data: IPokemonInfoPopupData):string;
    SnipePokemonItem(data:ISnipePokemonItemData) :string;
}