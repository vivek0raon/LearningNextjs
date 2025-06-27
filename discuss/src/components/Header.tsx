import React, { Suspense } from "react";
import AuthHeader from "./auth-header";
import SearchInput from "./SearchInput";

const Header = () => {
  // const session = await auth();
  return (
    <div className="grid grid-cols-3 h-14 items-center">
      <div className="flex justify-start">
        <h1 className="text-2xl font-bold">Discuss</h1>
      </div>
      <div className="flex justify-between">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
      <div className="flex justify-end gap-2">
        <AuthHeader />
      </div>
    </div>
  );
};

export default Header;
