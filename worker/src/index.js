/**
 * Jaren Business Development — isolated Cloudflare Worker (v1.2).
 * No automatic outbound outreach; authenticated drafting only.
 */
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","x-content-type-options":"nosniff"}});
const focusNames={inquiries:"customer inquiry management and follow-up",workflow:"workflow automation",data:"data management and operational reporting",hr:"HR and payroll operations"};
export default {
 async fetch(request,env){
   const url=new URL(request.url);
   if(request.method==="GET"&&url.pathname==="/health")return json({service:"jaren-business-development",version:"1.2.0",status:"operational",mode:"approval-required",outbound_enabled:false,storage_enabled:false});
   if(request.method==="POST"&&url.pathname==="/v1/outreach/draft"){
     if(!env.BD_API_TOKEN)return json({error:"AUTH_NOT_CONFIGURED",message:"Configure BD_API_TOKEN as a Cloudflare Worker secret before using this endpoint."},503);
     const auth=request.headers.get("authorization")||"";
     if(auth!==`Bearer ${env.BD_API_TOKEN}`)return json({error:"UNAUTHORIZED"},401);
     if(!/application\/json/i.test(request.headers.get("content-type")||""))return json({error:"JSON_REQUIRED"},415);
     if(Number(request.headers.get("content-length")||0)>8192)return json({error:"BODY_TOO_LARGE"},413);
     let data;try{data=await request.json()}catch{return json({error:"INVALID_JSON"},400)}
     const name=String(data.company||"").trim().slice(0,120);
     if(!name)return json({error:"COMPANY_REQUIRED"},400);
     const focus=focusNames[data.focus]||focusNames.workflow;
     const sender=String(data.sender||"Momentum Data Solutions team").trim().slice(0,100);
     const message=`Hello,\n\nI'm ${sender} with Momentum Data Solutions, a Houston-based business services company. We help organizations improve daily operations through practical technology, data services, and administrative support.\n\nI'd welcome the opportunity to learn more about ${name} and explore whether ${focus} could support your team. Could you direct me to the person responsible for business operations?\n\nThank you,\n${sender}\nMomentum Data Solutions\nwww.momentumdatasolutions.com`;
     return json({company:name,subject:`Introduction | Momentum Data Solutions and ${name}`,message,review_required:true,dispatched:false,stored:false});
   }
   return json({error:"NOT_FOUND"},404);
 }
};