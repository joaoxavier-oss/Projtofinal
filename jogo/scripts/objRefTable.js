const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.Anchor,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{Chao: 0},
	{Teclado: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{Personagem: 0},
	{Âncora: 0},
	{Planodefundo: 0},
	{Áudio: 0},
	{Mouse: 0},
	{Sprite2: 0},
	{Botão: 0},
	{fundodomenu: 0},
	{Baradevida: 0},
	{Projétil: 0},
	{Munição: 0},
	{Vida: 0}
];

self.InstanceType = {
	Chao: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Personagem: class extends self.ISpriteInstance {},
	Planodefundo: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Botão: class extends self.ISpriteInstance {},
	fundodomenu: class extends self.ISpriteInstance {},
	Baradevida: class extends self.ISpriteInstance {},
	Munição: class extends self.ISpriteInstance {}
}