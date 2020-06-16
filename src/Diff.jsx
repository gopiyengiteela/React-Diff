import React, { PureComponent } from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer";

const oldCode = `
<ACORD>
    <SignonRq>
        <SignonPswd>
            <CustId>
                <SPName>com.AMS</SPName>
                <CustPermId/>
                <CustLoginId>abc.xyz@libertymutual.com</CustLoginId>
            </CustId>
            <CustPswd>
                <EncryptionTypeCd/>
                <Pswd/>
            </CustPswd>
        </SignonPswd>
        <ClientDt>5/15/2019 9:09 AM</ClientDt>
        <CustLangPref>en-US</CustLangPref>
        <ClientApp>
            <Org>AMS</Org>
            <Name>AMS 360</Name>
            <Version>2.0</Version>
        </ClientApp>
        <ProxyClient>
            <Org>Vertafore</Org>
            <Name>AgencyBookRoll</Name>
            <Version>V1.00</Version>
        </ProxyClient>
    </SignonRq>
</ACORD>
`;
const newCode = `<ACORD>
    <SignonRq>
        <SignonPswd>
            <CustId>
                <SPName></SPName>
                <CustPermId/>
                <CustLoginId>abc.xyz@libertymutual.com</CustLoginId>
            </CustId>
            <CustPswd>
                <EncryptionTypeCd/>
                <Pswd/>
            </CustPswd>
        </SignonPswd>
        <ClientDt></ClientDt>
        <CustLangPref>en-US</CustLangPref>
        <ClientApp>
            <Org>AMS</Org>
            <Name></Name>
            <Version>2.0</Version>
        </ClientApp>
        <ProxyClient>
            <Org>Vertafore</Org>
            <Name>AgencyBookRoll</Name>
            <Version>V1.00</Version>
        </ProxyClient>
    </SignonRq>
</ACORD>`;

class Diff extends PureComponent {
  render = () => {
    return (
      <ReactDiffViewer
        oldValue={oldCode}
        newValue={newCode}
        compareMethod={DiffMethod.LINES}
        splitView={false}
        hideLineNumbers={true}
        showDiffOnly={false}
      />
    );
  };
}
export default Diff;
