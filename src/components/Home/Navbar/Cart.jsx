import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import SidePanel from "./Sidepanle";
import PanelContent from "./PanelContent";

const Cart = () => {
  const [panel, setPanel] = useState(null);

  return (
    <>
      <li
        className="flex gap-3 justify-center items-center cursor-pointer"
        onClick={() => setPanel("cart")}
      >
        <div className="bg-[#ffc107] px-3 py-3 rounded-full">
          <ShoppingCart size={16} />
        </div>

        <div className="flex-col hidden xl:flex">
          <span>Cart</span>
          <span>0-Items</span>
        </div>
      </li>

      <SidePanel
        open={panel !== null}
        onClose={() => setPanel(null)}
        title="Cart Products"
        
      >
        <PanelContent panel={panel} setPanel={setPanel} />
      </SidePanel>
    </>
  );
};

export default Cart;