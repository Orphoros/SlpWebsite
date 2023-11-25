"use client";

import React, { useState } from "react";

import { Avatar } from "@nextui-org/avatar";
import { Select, SelectItem } from "@nextui-org/select";
import { usePathname, useRouter } from "@/lib/navigation";
import { getLanguageName } from "@/lib/i18n";

type Props = {
    locales: {code: string, country: string}[]
    currentValue: {code: string, country: string}
};

export default function LanguageSwitcher({ locales, currentValue }: Props) {
    const pathname = usePathname();
    const router = useRouter();

    const [loc, setLoc] = useState(currentValue)

    return (
        <Select
            className="w-40"
            defaultSelectedKeys={[loc.code]}
            selectionMode="single"
            disallowEmptySelection
            aria-label="Language"
            variant="bordered"
            size='sm'
            radius='full'
            startContent={
                <Avatar
                    alt={loc.country}
                    className="w-10 h-7"
                    src={`https://flagcdn.com/${loc.country}.svg`}
                />
            }
            onChange={(e) => {
                if (e.target.value === '') {
                    setLoc(currentValue);
                }
                const locale = locales.find((locale) => locale.code === e.target.value)!;
                setLoc(locale);
                router.replace(pathname, {locale: locale.code});
            }}
        >
            {locales.map((locale) => (
                <SelectItem
                    key={locale.code}
                    value={getLanguageName(locale.code)}
                    startContent={
                        <Avatar
                            alt={locale.country}
                            className="w-6 h-6"
                            src={`https://flagcdn.com/${locale.country}.svg`}
                        />
                    }
                >
                    {getLanguageName(locale.code)}
                </SelectItem>
            ))}
        </Select>
    );
}
