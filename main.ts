
player.onChat("jail", function (usr) {
    mobs.teleportToPlayer(
    mobs.target(TargetSelectorKind.LocalPlayer),
    mobs.target(TargetSelectorKind.AllPlayers)
    )
    shapes.sphere(
    Block.Bedrock,
    player.position(),
    2.1,
    ShapeOperation.Hollow
    )
    player.execute(
    "/gamemode " + usr
    )
})
