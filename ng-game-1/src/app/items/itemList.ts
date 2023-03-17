import { Item } from "../interfaces/item";
import { ChainBoots, ChainChestplate, ChainHelmet, ChainLeggings, IronBoots, IronChestplate, IronHelmet, IronLeggings, LeatherBoots, LeatherCap, LeatherPants, LeatherTunic, ZombieHead } from "./armor";
import { Ale, Apple, BakedPotato, Bandage, Beetroot, BeetrootSoup, Bread, Button, Cake, Carrot, Cobweb, Cocktail, CookedChicken, CookedFish, CookedPorkchop, CookedRabbit, Cookie, Egg, Flashbang, GoldenApple, GoldenCarrot, Grenade, HealPotI, HealPotII, HealPotIII, HoneyBottle, Incendiary, MelonSlice, Milk, MushroomStew, MysteriousArtifact, Nemo, PoisonousPotato, Potato, Pufferfish, PumpkinPie, RabbitStew, RawBeef, RawChicken, RawFish, RawPorkchop, RawRabbit, RottenFlesh, Snowball, Steak, SuspiciousStew, SweetBerries, VegetableJuice, WaterBottle, WaterBucket } from "./consumables";
import { Bone, Bowl, BrownMushroom, Bucket, Coal, CocoaBeans, EnchantedBook, GlassBottle, GlowstoneDust, GoldIngot, Gunpowder, IronIngot, Leather, NetherWart, Pumpkin, RedMushroom, RedstoneDust, Stick, Stone, StringItem, Sugar, SugarCane, Wheat } from "./materials";
import { EnchantedFishingRod, EnchantedHoe, EnchantedPickaxe, EnchantedShovel, FishingRod, Hoe, MedKit, Pickaxe, Shovel, SmallBag } from "./tools";
import { Bow, Crossbow, EnchantedBow, EnchantedCrossbow, EnchantedIronAxe, EnchantedIronSword, EnchantedStoneAxe, EnchantedStoneSword, EnchantedWoodenAxe, EnchantedWoodenSword, IronAxe, IronSword, StoneAxe, StoneSword, WoodenAxe, WoodenSword } from "./weapons";

export const ItemList: Item[] = [
    /// armor
    LeatherCap,LeatherTunic,LeatherPants,LeatherBoots,
    ChainHelmet,ChainChestplate,ChainLeggings,ChainBoots,
    IronHelmet,IronChestplate,IronLeggings,IronBoots,
    ZombieHead,

    /// weapons
    WoodenSword,EnchantedWoodenSword,
    StoneSword,EnchantedStoneSword,
    IronSword,EnchantedIronSword,
    WoodenAxe,EnchantedWoodenAxe,
    StoneAxe, EnchantedStoneAxe,
    IronAxe, EnchantedIronAxe,
    Bow,EnchantedBow,
    Crossbow,EnchantedCrossbow,

    /// tools
    FishingRod,EnchantedFishingRod,
    Shovel,EnchantedShovel,
    Hoe,EnchantedHoe,
    Pickaxe,EnchantedPickaxe,

    /// misc
    SmallBag,MedKit,Button,MysteriousArtifact,

    /// t1 food
    Apple,MelonSlice,SweetBerries,Carrot,Potato,Beetroot,RawChicken,RawRabbit,RawPorkchop,
    RawBeef,RawFish,Nemo,RottenFlesh,PoisonousPotato,Pufferfish,Egg,

    /// t2 food
    Bread,BeetrootSoup,MushroomStew,SuspiciousStew,GoldenCarrot,BakedPotato,CookedRabbit,
    CookedFish,CookedChicken,CookedPorkchop,Steak,RabbitStew,Cookie,PumpkinPie,Cake,GoldenApple,
    Cocktail,

    /// medicine
    Bandage,Milk,WaterBottle,HoneyBottle,HealPotI,HealPotII,HealPotIII,Ale,VegetableJuice,WaterBucket,

    /// combat
    Cobweb,Snowball,Grenade,Flashbang,Incendiary,

    /// materials
    Wheat,Pumpkin,RedMushroom,BrownMushroom,SugarCane,NetherWart,CocoaBeans,Sugar,
    GoldIngot,Stick,IronIngot,Stone,StringItem,Leather,Bone,EnchantedBook,Bowl,GlassBottle,
    Coal,GlowstoneDust,RedstoneDust,Gunpowder,Bucket
]

export const CraftableList: Item[] = ItemList.filter(item => item.components);