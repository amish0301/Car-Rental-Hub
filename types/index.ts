import { MouseEventHandler } from "react";

export interface CustomButtonType {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface optionsType {
    title: string;
    value: string;
}

export interface CustomFilterType {
    title: string;
    options: optionsType[]
}

export interface SearchManufacturerType {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void
}

export interface CarCardType {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    year: number;
    model: string;
    transmission: string;
}

export interface FilterType {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}