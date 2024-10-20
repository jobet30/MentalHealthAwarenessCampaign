{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
        pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
		pkgs.nodePackages.gatsby-cli
        pkgs.replitPackages.jest
    ];
}